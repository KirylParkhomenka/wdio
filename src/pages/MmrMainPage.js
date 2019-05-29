import Page from './Page';

class MmrMainPage extends Page { 

    get vinInput() { return $('#vinText'); }
    get searchButton() { return $('.styles__vinEntry__3RUrd button'); }
    get similarVehicleComponent() { return $('.similarVehiclesDesktop'); }
    get similarVehicleHeading() { return $('.similarVehiclesDesktop span'); }
    get adjustedText() { return $('div[class*="vehicleMmr"]'); }
    get vehicleModel() { return $('div[class*="vehicleModel"]'); }
    get vehicleImage() { return $('div[class*="vehicleImage img"]'); }

    openMmrPage(URL) {
      super.open(URL);
    }

    performSearchByTestVin(TEST_VIN) {
      this.vinInput.addValue(TEST_VIN);
      this.searchButton.click();
      this.similarVehicleComponent.waitForDisplayed(10000);
    }

    isSimilarVehicleComponentDisplayed() {      
      return this.similarVehicleComponent.isDisplayed();
    }

    isSimilarVehicleHeadingDisplayed() {      
      return this.similarVehicleHeading.isDisplayed();
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

    verifyImageIsDisplayedAndHasFixedSize() {
      //image is displayed
      //has size=w86h64
    }
}
export default new MmrMainPage();
