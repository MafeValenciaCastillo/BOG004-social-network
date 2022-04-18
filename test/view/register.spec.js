import { createFormUser } from '../../src/view/register.js';

jest.mock('../../src/lib/firebase-utils.js');
describe('createFormUser', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="sectionGrid"><section id="container"></section></div>';
  });
  it('Mensaje muestra "email inválido"', () => {
    const result = createFormUser();
    const errorEmail = result.querySelector('#error-message-email');
    expect(errorEmail.textContent).toBe('Ingresa un email valido');
    expect(errorEmail.classList).toContain('error-message-hidden');
  });
  it('Mensaje muestra "La contraseña no coincide"', () => {
    const result = createFormUser();
    const errorPassword = result.querySelector('#error-message-password');
    expect(errorPassword.textContent).toBe('La contraseña no coincide');
  });
});
