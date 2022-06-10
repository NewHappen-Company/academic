export function validatePhone(phone: string): boolean {
  if(phone.length === 15 && parseInt(phone.substring(1, 3)) > 10 && parseInt(phone.substring(1, 3)) < 99) {
    return true;
  }

  return false;
}

export function validateEmail(email: string): boolean {
  if(email.indexOf('@') !== -1 && email.indexOf('.') !== -1 && email.indexOf('utfpr.edu.br') !== -1) {
    return true;
  }

  return false;
}

export function isAll(name: string, email: string, num: string, phone: string): boolean {
  if(name && num && email && phone) {
    return true;
  }

  return false;
}