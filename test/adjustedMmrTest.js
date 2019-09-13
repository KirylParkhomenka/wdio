import MainPage from '../src/pages/MainPage';
import OdometerPage from '../src/pages/OdometerPage';
import AdjustedMmrPage from '../src/pages/AdjustedMmrPage';
import CurrencyDisplayPage from '../src/pages/CurrencyDisplayPage';
import { assert, expect } from 'chai';

const inputs = [
    {
        adjustment_1: 'color',
        value_1: 'Pink',
        adjustment_2: '',
        value_2: '',
        adjustment_3: '',
        value_3: '',
        message: 'Not adjusted for Color',
        valuation: '$475'
    },
    {
        adjustment_1: 'region',
        value_1: 'NE',
        adjustment_2: '',
        value_2: '',
        adjustment_3: '',
        value_3: '',
        message: 'Not adjusted for Region',
        valuation: '$475'
    },
    {
        adjustment_1: 'region',
        value_1: 'NE',
        adjustment_2: '&condition=',
        value_2: '4.7',
        adjustment_3: '',
        value_3: '',
        message: 'Not adjusted for Region or Condition',
        valuation: '$475'
    },
    {
        adjustment_1: 'region',
        value_1: 'NE',
        adjustment_2: '&condition=',
        value_2: '4.7',
        adjustment_3: '&color=',
        value_3: 'Pink',
        message: 'Not adjusted for Region, Condition, or Color',
        valuation: '$475'
    }
]

describe('Adjusted MMR feature verification', () => {
  before(() => {
    MainPage.openEmptyMmrPageDesktop();
  })

  it('Adjustments display correctly', () => {
    AdjustedMmrPage.adjustValueInUrl('color', 'Red');
    MainPage.waitForTransactionsTableDisplayed();

    expect(AdjustedMmrPage.getAdjustedText()).to.contain('$14,900');
  });

  it('Adjusted MMR is displayed for Odometer Adjustment', () => {
    AdjustedMmrPage.adjustValueInUrl('mileage', '20000');
    MainPage.waitForTransactionsTableDisplayed();

    expect(AdjustedMmrPage.getAdjustedText()).to.contain('$16,050');
  });

  it('Adjusted MMR is displayed for Region Adjustment', () => {
    AdjustedMmrPage.adjustValueInUrl('region', 'SE');
    MainPage.waitForTransactionsTableDisplayed();

    expect(AdjustedMmrPage.getAdjustedText()).to.contain('$15,000');
  });

  it('Adjusted MMR is displayed for Condition Adjustment', () => {
    AdjustedMmrPage.adjustValueInUrl('condition', '4.1');
    MainPage.waitForTransactionsTableDisplayed();

    expect(AdjustedMmrPage.getAdjustedText()).to.contain('$14,900');
  });

  it('Adjusted MMR shows green arrow when greater than Average MMR', () => {
    AdjustedMmrPage.setMilageThatIncreaseValue();
    MainPage.waitForTransactionsTableDisplayed();

    assert.isTrue(AdjustedMmrPage.isDeltaIconTriangleUpDisplayed());

    expect(CurrencyDisplayPage.getBaseMmrCurrencyText()).to.equal(AdjustedMmrPage.getSpeedometerAverageValue());
    expect(CurrencyDisplayPage.getBaseMmrAboveText()).to.equal(AdjustedMmrPage.getSpeedometerAboveValue());
    expect(CurrencyDisplayPage.getBaseMmrBelowText()).to.equal(AdjustedMmrPage.getSpeedometerBelowValue());
  });

  it('Adjusted MMR shows red arrow when less than Average MMR', () => {
    AdjustedMmrPage.setMilageThatDecreaseValue();
    MainPage.waitForTransactionsTableDisplayed();

    assert.isTrue(AdjustedMmrPage.isDeltaIconTriangleDownDisplayed());

    expect(CurrencyDisplayPage.getBaseMmrCurrencyText()).to.equal(AdjustedMmrPage.getSpeedometerAverageValue());
    expect(CurrencyDisplayPage.getBaseMmrAboveText()).to.equal(AdjustedMmrPage.getSpeedometerAboveValue());
    expect(CurrencyDisplayPage.getBaseMmrBelowText()).to.equal(AdjustedMmrPage.getSpeedometerBelowValue());
  });

  it('Adjusted MMR shows no arrow when equal to Average MMR', () => {
    AdjustedMmrPage.setMilageNoEffectValue();
    MainPage.waitForTransactionsTableDisplayed();

    assert.isFalse(AdjustedMmrPage.isDeltaIconDisplayed());
    expect(CurrencyDisplayPage.getBaseMmrCurrencyText()).to.equal(AdjustedMmrPage.getSpeedometerAverageValue());
    expect(CurrencyDisplayPage.getBaseMmrAboveText()).to.equal(AdjustedMmrPage.getSpeedometerAboveValue());
    expect(CurrencyDisplayPage.getBaseMmrBelowText()).to.equal(AdjustedMmrPage.getSpeedometerBelowValue());
  });

  inputs.forEach(function (input) {
    let adjustment_1 = input.adjustment_1;
    let value_1 = input.value_1;
    let adjustment_2 = input.adjustment_2;
    let value_2 = input.value_2;
    let adjustment_3 = input.adjustment_3;
    let value_3 = input.value_3;
    let message = input.message;
    let valuation = input.valuation;
 
  it('Adjusted MMR show Not Adjusted By message', () => {
    AdjustedMmrPage.adjustValues('mid', '200401408080560', adjustment_1, value_1, adjustment_2, value_2, adjustment_3, value_3,);
    MainPage.waitForTransactionsTableDisplayed();  
    expect(AdjustedMmrPage.getAdjustedText()).to.contain(message);
    expect(AdjustedMmrPage.getAdjustedText()).to.contain(valuation);  
  }); 
  });

  it('AdjustedMMR Will Show NULL When a MID Does Not Have A Valuation', () => {
    OdometerPage.makeYmmsSelection();
    AdjustedMmrPage.adjustColorManually('Red');
    MainPage.selectYearDropdown('1992');

    expect(AdjustedMmrPage.getAdjustedText()).to.contain('- -');   
  });
});