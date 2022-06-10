export function phoneMask(phone: string): string {
  var a = phone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  let formatted;
  if(a) {
    formatted = !a[2] ? a[1] : '(' + a[1] + ') ' + a[2] + (a[3] ? '-' + a[3] : '');
    return formatted;
  }
  return '';
}