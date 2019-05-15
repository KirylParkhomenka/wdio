const assert = require('assert');

describe('manheim.com page', () => {
  it('should have the right title - Manheim Auctions', () => {
      browser.url('http://www.manheim.com.au');
      const TITLE = browser.getTitle();
      assert.equal(TITLE, 'Manheim Auctions');
    });

  it('should proceed to Login page', () => {
      const LOGIN_BTN = $('//div[contains (@class, "header-links-bar")]//a[@href = "/account/login"]');
      const EMAIL_INPUT = $('#LogOnUsername');
      const PASSWORD = $('#LogonPassword');
      const OK_BTN = $('.btn-blue-light');
      const ERROR = $('.error-summary');

      browser.url('http://www.manheim.com.au');

      LOGIN_BTN.click();
      EMAIL_INPUT.addValue('test');
      PASSWORD.addValue('test');

      expect(ERROR.isDisplayed());
    });
});
