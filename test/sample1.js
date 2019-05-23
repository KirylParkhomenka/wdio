//var chai = require("chai");
//var expect = chai.expect;
import {expect} from 'chai';
const assert = require('assert');
//const expect = require('chai').expect;

describe('manheim.com page', () => {
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
      OK_BTN.click();

      expect(ERROR.isDisplayed());
    });
});
