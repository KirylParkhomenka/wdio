class MainPage {

  get vinInput() { return $('#vinText'); }
  get searchButton() { return $('.styles__vinEntry__3RUrd button'); }

  openMainPageDesktopView() {
    browser.setWindowSize(1920, 1200);+
    browser.url('http://localhost:8080/?stubs=true');
  }

  openMainPageMobileView() {
    browser.setWindowSize(360, 1024);
    browser.url('http://localhost:8080/?mobile=true');
  }

  performSearchByVin(VIN) {
    this.vinInput.addValue(VIN);
    this.searchButton.click();
  }

  verifyNumberOfWindows() {
    let openedTabsHandles = browser.getWindowHandles();
    return openedTabsHandles;
  }

}
export default new MainPage();