export function estimateHref(path: string): string {
  const service = path.includes('permanent-christmas-lights') ? 'Permanent LED Lighting'
    : path.includes('christmas-light') ? 'Christmas Light Installation' : '';
  return service ? `/contact?service=${encodeURIComponent(service)}` : '/contact';
}
