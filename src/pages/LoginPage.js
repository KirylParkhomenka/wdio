import Page from './Page';

const URL = 'http://www.manheim.com.au';
const INVALID_USERNAME = 'test';
const INVALID_PASSWORD = 'test';

class LoginPage extends Page { 

    get loginButton() { return $('//div[contains (@class, "header-links-bar")]//a[@href = "/account/login"]'); }
    get emailInput() { return $('#LogOnUsername'); }
    get password() { return $('#LogonPassword'); }
    get okButton() { return $('.btn-blue-light'); }
    get error() { return $('.error-summary'); }

    proceedToLoginPage() {
      super.open(URL);
      this.loginButton.click();
    }

    enterInvalidLoginCreds() {
      this.emailInput.addValue(INVALID_USERNAME);
      this.password.addValue(INVALID_PASSWORD);
      this.okButton.click();
    }

    isErrorDisplayed() {      
      return this.error.isDisplayed();
    }
}
export default new LoginPage();
