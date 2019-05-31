import Page from './Page';

class MmrMainPage extends Page { 

    get vinInput() { return $('#vinText'); }
    get searchButton() { return $('.styles__vinEntry__3RUrd button'); }
    get similarVehicleComponent() { return $('.similarVehiclesDesktop'); }
    get similarVehicleHeading() { return $('div[class*="desktopText"] span'); }
    get viewAllLink() { return $('div[class*="desktopText"] a'); }

    get oveLoginInput() { return $('#user_username'); }
    get ovePasswordInput() { return $('#user_password'); }
    get oveLoginButton() { return $('#login_button'); }
    get oveResults() { return $('.ResultsCount__text'); }

    get adjustedText() { return $('div[class*="vehicleMmr"]'); }
    get vehicleModel() { return $('div[class*="vehicleModel"]'); }
    get vehicleImage() { return $('div[class*="vehicleImage"] img'); }
    get vehicleOdometer() { return $('.vehicleOdometer span'); }

    openMmrPage(URL) {
      super.open(URL);
      browser.setWindowSize(1920, 1200);
    }

    performSearchByTestVin(TEST_VIN) {
      this.vinInput.addValue(TEST_VIN);
      this.searchButton.click();
      this.similarVehicleComponent.waitForDisplayed(10000);
    }

    isSimilarVehicleComponentDisplayed() {      
      return this.similarVehicleComponent.isDisplayed();
    }

    getHeadingText() {      
      return this.similarVehicleHeading.getText();
    }

    getViewAllLinkText() {      
      return this.viewAllLink.getText();
    }

    verifyViewAllLinkLeadsToSrp(LOGIN, PASSWORD) {
      this.viewAllLink.click();
      browser.pause(2000);
      let openedTabsHandles = browser.getWindowHandles();
      browser.switchToWindow(openedTabsHandles[1]);

      this.oveLoginInput.waitForDisplayed(5000);
      this.oveLoginInput.setValue(LOGIN);
      this.ovePasswordInput.setValue(PASSWORD);
      this.oveLoginButton.click();
      browser.pause(1000);

      let url = browser.getUrl();

      browser.switchToWindow(openedTabsHandles[0]);

      return url;
    }

    isAdjustedTextDisplayed() {      
      return this.adjustedText.isDisplayed();
    }

    /*
    Get vehicle model text and truncate frist 3 digits
     */
    verifyApostrophReplaceTwoDigits() {
      return this.vehicleModel.getText().substring(0, 3);
    }

    verifyImageHasFixedSize() {
      let width = this.vehicleImage.getSize('width');
      let height = this.vehicleImage.getSize('height');

      return (width + 'x' + height);
    }

    verifyVehicleOdometerUnits() {
      let odometerText = this.vehicleOdometer.getText();
      let firstPart = odometerText.substring(0, odometerText.indexOf('|'));
      let unit = firstPart.replace(/[0-9,. ]/g,'')
      return unit;
    }
}
export default new MmrMainPage();
