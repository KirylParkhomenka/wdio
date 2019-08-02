import MainPage from '../src/pages/MainPage';
import OdometerPage from '../src/pages/OdometerPage';
import CurrencyDisplayPage from '../src/pages/CurrencyDisplayPage';
import { assert } from 'chai';
import { expect } from 'chai';

const VIN = '1G2ZG558764249870';

describe('Odometer feature verification', () => {

  before(() => {
    MainPage.openMainPageDesktopView();
  })

  it('Custom Odometer Values Are Not Persisted Across YMMS Selections', () => {
    OdometerPage.makeYmmsSelection();
    OdometerPage.setOdometerValue('1234');

    MainPage.selectYearDropdown('2015');
    MainPage.selectMakeDropdown('TOYOTA');
    MainPage.selectModelDropdown('HIGHLANDER AWD V6');
    MainPage.selectStyleDropdown('4D SUV LE');

    MainPage.waitForTransactionsTableDisplayed();

    expect(OdometerPage.getOdometerValue()).to.not.equal('1,234');
  });

  it('Comma allowed in odometer field - thousands', () => {
    OdometerPage.makeYmmsSelection();
    OdometerPage.setOdometerValue('1,234');
    OdometerPage.clickOdometerGoButton();
    OdometerPage.waitForOdometerDeltaDisplayed();

    expect(OdometerPage.getOdometerValue()).to.be.equal('1,234');
  });
   
  it('Comma allowed in odometer field (millions) & can be changed', () => {
    OdometerPage.makeYmmsSelection();
    OdometerPage.setOdometerValue('1,234,000');
    OdometerPage.clickOdometerGoButton();
    OdometerPage.waitForOdometerDeltaDisplayed();

    expect(OdometerPage.getOdometerValue()).to.be.equal('1,234,000');

    OdometerPage.clearOdometerValue();
    OdometerPage.setOdometerValue('750');

    expect(OdometerPage.getOdometerValue()).to.be.equal('750');
  });
    
  it('Comma allowed in odometer field - billions', () => {
    OdometerPage.makeYmmsSelection();
    OdometerPage.setOdometerValue('1,234,000,000');
    OdometerPage.clickOdometerGoButton();
    OdometerPage.waitForOdometerDeltaDisplayed();

    expect(OdometerPage.getOdometerValue()).to.be.equal('1,234,000,000');
  });

  it('I change odometer to have commas in the wrong place', () => {
    OdometerPage.makeYmmsSelection();
    OdometerPage.setOdometerValue('1,2,34,00,0,000');
    OdometerPage.clickOdometerGoButton();
    OdometerPage.waitForOdometerDeltaDisplayed();
    
    expect(OdometerPage.getOdometerValue()).to.be.equal('1,234,000,000');
  });
    
  it('I land on the MMR page from a deep linked URL with bad mileage in the URL', () => {
    OdometerPage.openUrlWithInvalidMileage();
    OdometerPage.waitForOdometerInputEnabled();

    expect(OdometerPage.getOdometerValue()).to.be.equal('');
  });
  
 it('Perform VIN search and update odometer value by pressing Enter on keyboard', () => {
    MainPage.performSearchByVin(VIN);
    OdometerPage.setOdometerValue('50,000');
    MainPage.pressEnterOnKeyboard();
    CurrencyDisplayPage.waitForDeltaIconIsDisplayed();

    expect(CurrencyDisplayPage.getAdjustedCurrencyText()).to.equal('$2,450');
    expect(OdometerPage.getOdometerValue()).to.equal('50,000');    
  });

  it('Perform YMMS search and update odometer value by pressing Enter on keyboard', () => {
    OdometerPage.makeYmmsSelection();
    OdometerPage.setOdometerValue('50,000');
    MainPage.pressEnterOnKeyboard();

    assert.isTrue(OdometerPage.isOdometerFieldDisabled());
    expect(OdometerPage.getOdometerValue()).to.equal('50,000');   
  });
});