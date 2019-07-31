import * as Constants from '../helpers/urls'

class MainPage {

  get vinInput() { return $('#vinText'); }
  get searchButton() { return $('.styles__vinEntry__3RUrd button'); }
  get yearDropdown() { return $('#Year'); }
  get makeDropdown() { return $('#Make'); }
  get modelDropdown() { return $('#Model'); }
  get styleDropdown() { return $('#Style'); }

  get transactionsTable() { return $('#TxnTableBody'); }

  openMainPageDesktopView() {
    browser.setWindowSize(1920, 1200);+
    browser.url(Constants.URL_DESKTOP);
  }

  openMainPageMobileView() {
    browser.setWindowSize(360, 1024);
    browser.url(Constants.URL_MOBILE);
  }

  performSearchByVin(VIN) {
    this.vinInput.doubleClick();
    browser.keys('Delete')
    this.vinInput.addValue(VIN);
    this.searchButton.click();
  }

  verifyNumberOfWindows() {
    let openedTabsHandles = browser.getWindowHandles();
    return openedTabsHandles;
  }

  pressEnterOnKeyboard() {
    browser.keys('Enter');
  }

  selectYearDropdown(year) {
    this.yearDropdown.selectByVisibleText(year);
    this.makeDropdown.waitForEnabled(2000);
  }

  selectMakeDropdown(make) {
    this.makeDropdown.selectByVisibleText(make);
    browser.pause(2000);
  }
  
  selectModelDropdown(model) {
    this.modelDropdown.selectByVisibleText(model);
    this.styleDropdown.waitForEnabled(2000);
  }

  selectStyleDropdown(style) {
    this.styleDropdown.selectByVisibleText(style);
  }

  waitForTransactionsTableDisplayed() {      
    browser.waitUntil(() => {
      return this.transactionsTable.isDisplayed()
    }, 5000);
  }

}
export default new MainPage();