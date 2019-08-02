import MainPage from '../src/pages/MainPage';
import CurrencyDisplayPage from '../src/pages/CurrencyDisplayPage';
import { expect } from 'chai';

describe('Currency Display feature verification', () => {
  
  it('$00 is displayed for Adjusted MMR with value of 0', () => {
    browser.url('http://localhost:8080/?country=US&mid=200401408080560&mileage=500000&region=NE');
    MainPage.waitForTransactionsTableDisplayed();

    expect(CurrencyDisplayPage.getAdjustedCurrencyText()).to.equal('$00');
  });

  it('- - is displayed for Projected MMR with value of 0', () => {
    browser.url('http://localhost:8080/?country=US&mid=200006904730410&mileage=500000&region=NE');
    MainPage.waitForTransactionsTableDisplayed();
    
    expect(CurrencyDisplayPage.getBaseMmrCurrencyText()).to.equal('$850');
    expect(CurrencyDisplayPage.getProjectedAverageNextMonthText()).to.equal('Next Month\n- -');
  });
});