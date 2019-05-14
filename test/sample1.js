const assert = require('assert');

describe('manheim.com page', () => {
  it('should have the right title - Manheim Auctions', () => {
      browser.url('http://www.manheim.com.au');
      const title = browser.getTitle();
      assert.equal(title, 'Manheim Auctions');
    });
});
