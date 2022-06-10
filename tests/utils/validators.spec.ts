import { isAll, validateEmail, validatePhone } from '../../src/utils/validators';

// This function show a toast message with the error message  in production mode
function simulateErrorMessageFn() {}

// ------------ EMAIL ------------
test('Student email is valid', () => {
  expect(validateEmail('yuribaza@alunos.utfpr.edu.br', simulateErrorMessageFn)).toBe(true);
});

test("Student email doesn't belong UTFPR", () => {
  expect(validateEmail('yuribaza@yahoo.com', simulateErrorMessageFn)).toBe(false);
});

test("Student email doesn't have @", () => {
  expect(validateEmail('yuribaza2alunos.utfpr.edu.br', simulateErrorMessageFn)).toBe(false);
});

// ------------ PHONE ------------
test("Student phone is valid", () => {
  expect(validatePhone('(44) 99678-8736', simulateErrorMessageFn)).toBe(true);
});

test("Student phone has a invalid DDD", () => {
  expect(validatePhone('(05) 99678-8736', simulateErrorMessageFn)).toBe(false);
});

test("Student phone has a invalid lenght", () => {
  expect(validatePhone('(05) 99678-87368', simulateErrorMessageFn)).toBe(false);
});

// ------- MISSING FIELDS --------
test("All students data has preenched", () => {
  expect(isAll(
    'Yuri Baza', 
    'yuribaza@alunos.utfpr.edu.br', 
    '2046482',
    '(44) 99678-8736', 
    simulateErrorMessageFn
  )).toBe(true);
});

test("Some students data has preenched", () => {
  expect(isAll(
    '', 
    'yuribaza@alunos.utfpr.edu.br', 
    '',
    '(44) 99678-8736', 
    simulateErrorMessageFn
  )).toBe(false);
});