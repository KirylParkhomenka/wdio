import MainPage from '../src/pages/MainPage';
import CurrencyDisplayPage from '../src/pages/CurrencyDisplayPage';
import { expect } from 'chai';

const MID_1 = '200401408080560';
const MID_2 = '200006904730410';

describe('Currency Display feature verification', () => {

  before(() => {
    MainPage.openEmptyMmrPageDesktop();
  })
  
  it('$00 is displayed for Adjusted MMR with value of 0', () => {
    CurrencyDisplayPage.adjustMid(MID_1);
    MainPage.waitForTransactionsTableDisplayed();

    expect(CurrencyDisplayPage.getAdjustedCurrencyText()).to.equal('$00');
  });

  it('- - is displayed for Projected MMR with value of 0', () => {
    CurrencyDisplayPage.adjustMid(MID_2);
    MainPage.waitForTransactionsTableDisplayed();
    
    expect(CurrencyDisplayPage.getBaseMmrCurrencyText()).to.equal('$850');

    if (browser.capabilities.browserName === 'Safari') {
      expect(CurrencyDisplayPage.getProjectedAverageNextMonthText()).to.equal('Next Month- -');
    } else {
      expect(CurrencyDisplayPage.getProjectedAverageNextMonthText()).to.equal('Next Month\n- -');
    }
  });
});