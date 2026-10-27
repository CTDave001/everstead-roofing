import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=readFileSync('src/components/sections/ContactSection.astro','utf8');
const handler=source.slice(source.lastIndexOf('<script>')+8,source.lastIndexOf('</script>'));
async function submitScenario({token=true,ok=true,network=false}={}){
 const listeners={}; const events=[]; const requests=[];
 const button={textContent:'Get My Free Estimate',disabled:false};
 const error={hidden:true,focus(){this.focused=true;}};
 const success={style:{display:'none'},focus(){this.focused=true;}};
 const form={style:{},addEventListener(name,fn){listeners[name]=fn;},querySelector(s){if(s==='button[type="submit"]')return button;if(s==='#sms_consent')return {checked:false};}};
 const values={name:'Conversion Test',phone:'+13607687611',email:'',message:'Test details',service:'Christmas Light Installation',...(token?{'cf-turnstile-response':'test-token'}:{})};
 class FormData{get(k){return values[k]??null;}forEach(fn){Object.entries(values).forEach(([k,v])=>fn(v,k));}}
 class HTMLSelectElement{}
 const context={document:{getElementById(id){return {'contact-form':form,'form-success':success,'form-error':error}[id]??null;}},window:{location:{search:'?utm_source=test',href:'https://www.eversteadroofing.com/contact?utm_source=test'},dispatchEvent(e){events.push(e.type);}},FormData,HTMLSelectElement,URLSearchParams,Date,CustomEvent:class{constructor(type){this.type=type;}},fetch:async(url,opts)=>{requests.push(JSON.parse(opts.body));if(network)throw Error('offline');return {ok,json:async()=>({error:'Server details must not be shown'})};}};
 vm.runInNewContext(handler,context);
 await listeners.submit({preventDefault(){}});
 return {events,requests,button,error,success,form};
}
let s=await submitScenario();
assert.equal(s.requests.length,1);assert.equal(s.requests[0].email,'');assert.equal(s.requests[0].custom_fields.sms_consent,false);assert.equal(s.requests[0].custom_fields.utm_source,'test');assert.deepEqual(s.events,['everstead:lead-success']);assert.equal(s.success.style.display,'block');assert.equal(s.form.style.display,'none');
for(const options of [{ok:false},{network:true},{token:false}]){s=await submitScenario(options);assert.equal(s.events.length,0);assert.equal(s.error.hidden,false);assert.equal(s.error.focused,true);assert.equal(s.button.disabled,false);if(options.token===false)assert.equal(s.requests.length,0);}
const analytics=readFileSync('src/components/Analytics.astro','utf8').split('<script is:inline define:vars={{ measurementId }}>')[1].split('</script>')[0];
function analyticsScenario(host='www.eversteadroofing.com',dnt='0'){
 const listeners={};const events=[];
 const win={dataLayer:[]};const doc={referrer:'https://example.com/?email=private@example.com',createElement(){return {};},head:{appendChild(){}},addEventListener(n,f){listeners[n]=f;}};
 class Element{constructor(link){this.link=link;}closest(){return this.link;}}
 const context={window:win,document:doc,location:{hostname:host,origin:'https://'+host,pathname:'/contact',search:'?phone=private'},navigator:{doNotTrack:dnt},URL,Date,Element,measurementId:'G-TEST'};
 win.addEventListener=(n,f)=>listeners[n]=f;
 vm.runInNewContext(analytics,context);
 const click=(href)=>listeners.click?.({target:new Element({getAttribute:()=>href,dataset:{ctaLocation:'mobile_bar'}})});
 click('tel:+13605583350');click('sms:+13605583350');click('/contact');listeners['everstead:lead-success']?.();
 return win.dataLayer.map(x=>Array.from(x));
}
let a=analyticsScenario();
assert.deepEqual(a.filter(x=>x[0]==='event').map(x=>x[1]),['click_to_call','click_to_text','estimate_form_open','generate_lead']);
const payload=JSON.stringify(a);assert(!payload.includes('private'));assert(!payload.includes('+13605583350'));
assert.equal(analyticsScenario('127.0.0.1').length,0);assert.equal(analyticsScenario('www.eversteadroofing.com','1').length,0);
console.log('PASS: successful lead, consent false, optional email, server/network/captcha errors, attribution; click events, privacy, local and DNT exclusions. No live leads or messages sent.');
