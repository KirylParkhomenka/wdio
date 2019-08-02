class AdjustedMmrPage {

  get adjustedMmr() { return $('//div[@data-test = \'AdjustedMMR\']'); }
  get extColorDropdown() { return $('select[id*=\'Ext\']'); }
  get deltaIcon() { return $('//i[@data-test = \'deltaIcon\']'); }
  get deltaIconTriangleUp() { return $('//div[@data-test = \'AdjustedMMR\']//i[contains(@class, \'icon-triangle-up\')]'); }
  get deltaIconTriangleDown() { return $('//div[@data-test = \'AdjustedMMR\']//i[contains(@class, \'icon-triangle-down\')]'); }
  get extColorDropdown() { return $('select[id*=\'Ext\']'); }
  get speedometerAverageValue() { return $('//*[@data-test = \'averageValue\']'); }
  get speedometerAboveValue() { return $('//*[@data-test = \'aboveValue\']'); }
  get speedometerBelowValue() { return $('//*[@data-test = \'belowValue\']'); }

  adjustValueInUrl(adjustment, value) {
    browser.url('http://localhost:8080/?auto_adjust=true&mid=201406957689948&country=US&' + adjustment + '=' + value);
  }

  adjustValues(type, type_value, adjustment_1, value_1, adjustment_2, value_2, adjustment_3, value_3) {
    browser.url('http://localhost:8080/?auto_adjust=true&' + type + '=' + type_value + '&' + adjustment_1 + '=' + value_1 + adjustment_2 + value_2 + adjustment_3 + value_3 +'&country=US');
  }

  getAdjustedText() {
    return this.adjustedMmr.getText();
  }

  adjustColorManually(color) {
    this.extColorDropdown.waitForEnabled(5000);
    this.extColorDropdown.selectByAttribute('value', color);
  }

  setMilageThatIncreaseValue() {
    browser.url('http://localhost:8080/?mid=201406957689948&country=US&region=NA&mileage=20000');
  }

  setMilageThatDecreaseValue() {
    browser.url('http://localhost:8080/?mid=201406957689948&country=US&region=NA&mileage=50000');
  }

  setMilageNoEffectValue() {
    browser.url('http://localhost:8080/?mid=201406957689948&country=US&region=NA&mileage=33000');
  }

  isDeltaIconDisplayed() {
    try {
      return this.deltaIcon.isDisplayed();
    } catch (err) {
      return false;
    } 
  }

  isDeltaIconTriangleUpDisplayed() {      
    return this.deltaIconTriangleUp.isDisplayed();
  }

  isDeltaIconTriangleDownDisplayed() {      
    return this.deltaIconTriangleDown.isDisplayed();
  }

  getSpeedometerAverageValue() {
    return this.speedometerAverageValue.getText();
  }

  getSpeedometerAboveValue() {
    return this.speedometerAboveValue.getText();
  }

  getSpeedometerBelowValue() {
    return this.speedometerBelowValue.getText();
  }

}
export default new AdjustedMmrPage();