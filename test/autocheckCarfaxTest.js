import MainPage from '../src/pages/MainPage';
import AutocheckCarfaxPage from '../src/pages/AutocheckCarfaxPage';
import { assert } from 'chai';
import { expect } from 'chai';

const VIN = 'YV126MFB6F2122313';

describe('AutoCheck and CarFax links verification', () => {
  
  it('Both AutoCheck and Carfax links are present', () => {
    MainPage.openMainPageDesktopView(URL);
    MainPage.performSearchByVin(VIN);
    assert.isTrue(AutocheckCarfaxPage.isAutoCheckLinkDisplayed());
    assert.isTrue(AutocheckCarfaxPage.isCarFaxLinkDisplayed());
  });

  it('AutoCheck link should open in the same window on Mobile', () => {
    MainPage.openMainPageMobileView(URL);
    MainPage.performSearchByVin(VIN);
    AutocheckCarfaxPage.clickAutoCheckLink();
    
    expect(MainPage.verifyNumberOfWindows()).to.have.lengthOf(1);
    browser.back();
  });

  it('CarFax link should open in the same window on Mobile', () => {
    MainPage.openMainPageMobileView(URL);
    MainPage.performSearchByVin(VIN);
    AutocheckCarfaxPage.clickCarFaxLink();
    
    expect(MainPage.verifyNumberOfWindows()).to.have.lengthOf(1);
    browser.back();
  });
});