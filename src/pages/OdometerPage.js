import * as Constants from '../helpers/urls'

class OdometerPage { 

  get odometerInput() { return $('#Odometer'); }
  get odometerGoButton() { return $('//button[@data-test = \'odometerGoBtn\']'); }
  get odometerDelta() { return $('#OdometerDelta'); }
  
  setOdometerValue(odometerValue) {      
    this.odometerInput.waitForEnabled(5000);
    this.odometerInput.setValue(odometerValue);
  }

  getOdometerValue() {
    return this.odometerInput.getValue();
  }

  clearOdometerValue() {
    this.odometerInput.doubleClick();
    browser.keys('Delete');
  }

  makeYmmsSelection() {
    browser.url(Constants.MID_URL_2);
  }

  openUrlWithInvalidMileage() {
    browser.url(Constants.INVALID_MILEAGE_URL);
  }

  waitForOdometerInputDisabled() {      
    browser.waitUntil(() => {
      return !this.odometerInput.isEnabled()
    }, 5000);
  }

  waitForOdometerInputEnabled() {      
    browser.waitUntil(() => {
      return this.odometerInput.isEnabled()
    }, 5000);
  }

  isOdometerFieldDisabled() {
    this.waitForOdometerInputDisabled();
    return this.odometerInput.getProperty('disabled');
  }

  clickOdometerGoButton() {
    this.odometerGoButton.click();
  }

  waitForOdometerDeltaDisplayed() {      
    browser.waitUntil(() => {
      return this.odometerDelta.isDisplayed();
    }, 5000);
  }

}
export default new OdometerPage();