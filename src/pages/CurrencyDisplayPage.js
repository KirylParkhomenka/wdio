class CurrencyDisplayPage { 

  get adjustedCurrencyText() { return $('//div[@data-test = \'AdjustedMMR\']//div[@data-test = \'currencyDisplay\']'); }
  get baseMmrCurrencyText() { return $('div[class*=\'styles__currency_\']'); }
  get baseMmrAboveText() { return $('//span[@data-test = \'above\']'); }
  get baseMmrBelowText() { return $('//span[@data-test = \'below\']'); }
  get transactionTableRow() { return $('#TxnTableBody > *:first-child'); }
  get projectedAverageNextMonth() { return $('//div[@data-test = \'MMRNextMonthDisplay\']'); }
  get deltaIcon() { return $('//i[@data-test = \'deltaIcon\']'); }

  getAdjustedCurrencyText() {
    return this.adjustedCurrencyText.getText();
  }

  getBaseMmrCurrencyText() {
    return this.baseMmrCurrencyText.getText();
  }

  getBaseMmrAboveText() {
    return this.baseMmrAboveText.getText();
  }

  getBaseMmrBelowText() {
    return this.baseMmrBelowText.getText();
  }

  getProjectedAverageNextMonthText() {
    return this.projectedAverageNextMonth.getText();
  }

  waitForDeltaIconIsDisplayed() {      
    browser.waitUntil(() => {
      return this.deltaIcon.isDisplayed()
    }, 7000);
  }
  
}
export default new CurrencyDisplayPage();