import {  changeView } from '../../src/view-controler/router.js';

describe('changeview', () => {
  it.only('debería ser una función', () => {
    expect(changeView('#/login')).toBe('function');
  });
});