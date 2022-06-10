import { phoneMask } from '../../src/utils/phoneMask';

test('Phone mask is correct', () => {
  expect(phoneMask('44996788736')).toBe('(44) 99678-8736');
});

test('Phone mask is incorrect', () => {
  expect(phoneMask('abc')).toBe('');
});