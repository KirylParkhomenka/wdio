export default class Page {
    constructor() {
        this.title = 'Page';
    }

    open(path) {
        browser.url(path);
    }
}