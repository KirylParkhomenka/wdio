class CurrencyDisplayPage { 

  get adjustedCurrencyText() { return $('//div[@data-test = \'AdjustedMMR\']//div[@data-test = \'currencyDisplay\']'); }
  get baseMmrCurrencyText() { return $('div[class*=\'styles__currency_\']'); }
  get transactionTableRow() { return $('#TxnTableBody > *:first-child'); }
  get projectedAverageNextMonth() { return $('//div[@data-test = \'MMRNextMonthDisplay\']'); }

  getAdjustedCurrencyText() {
    this.transactionTableRow.waitForDisplayed(5000);
    return this.adjustedCurrencyText.getText();
  }

  getBaseMmrCurrencyText() {
    this.transactionTableRow.waitForDisplayed(5000);
    return this.baseMmrCurrencyText.getText();
  }

  getProjectedAverageNextMonthText() {
    return this.projectedAverageNextMonth.getText();
  }
  
}
  export default new CurrencyDisplayPage();