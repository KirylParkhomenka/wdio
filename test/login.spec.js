import { assert } from 'chai';
import LoginPage from '../src/pages/LoginPage';

describe('manheim.com page', () => {
  it('should display error on Login page', () => {

      LoginPage.proceedToLoginPage();
      LoginPage.enterInvalidLoginCreds();

      assert.isTrue(LoginPage.isErrorDisplayed());
    });
});
