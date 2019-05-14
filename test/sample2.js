const assert = require('assert');

describe('manheim.com page', () => {
    it('should have the right title - International', () => {

        const TITLE = $('.title.section');

        browser.url('https://manheim.com');

        TITLE.waitForDisplayed(5000);

        const title = browser.getTitle();
        assert.equal(title, 'International');
    });
});
