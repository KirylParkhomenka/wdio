import Page from './Page';

class MmrMainPage extends Page { 

    get vinInput() { return $('#vinText'); }
    get searchButton() { return $('.styles__vinEntry__3RUrd button'); }
    get similarVehicleVidget() { return $('.similarVehiclesDesktop'); }

    openMmrPage(URL) {
      super.open(URL);
    }

    performSearchByTestVin(TEST_VIN) {
      this.vinInput.addValue(TEST_VIN);
      this.searchButton.click();
      this.similarVehicleVidget.waitForDisplayed(10000);
    }

    isSimilarVehicleVidgetDisplayed() {      
      return this.similarVehicleVidget.isDisplayed();
    }
}
export default new MmrMainPage();
