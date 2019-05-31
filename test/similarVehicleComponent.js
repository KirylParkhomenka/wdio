import MmrMainPage from '../src/pages/MmrMainPage';
import { assert } from 'chai';
import { expect } from 'chai';

const URL = 'https://mmr.manheim.man-qa2.com/';
const TEST_VIN = 'JH4CL96855C010839';
const COMPONENT_HEADING = 'Similar Vehicles for Sale';
const OVE_LOGIN = 'demodealer';
const OVE_PASSWORD = 'password';
const VIEW_ALL_LINK = 'View All >';
const SRP_URL_PART = 'search/results';

describe('Similar Vehicles component verification', () => {
  
  it('Component is displayed', () => {
    MmrMainPage.openMmrPage(URL);
    MmrMainPage.performSearchByTestVin(TEST_VIN);
    
    assert.isTrue(MmrMainPage.isSimilarVehicleComponentDisplayed());
  });

  it('Component Heading is "Similar Vehicles for Sale"', () => {
    assert.equal(MmrMainPage.getHeadingText(), COMPONENT_HEADING);
  });

  it('Horizontal scroll button is displayed', () => {
    //TBD
  });

  it('"View All >" link is displayed', () => {
    assert.equal(MmrMainPage.getViewAllLinkText(), VIEW_ALL_LINK);
  });

  it('"View All >" link navigates to an SRP', () => {
    assert.include(MmrMainPage.verifyViewAllLinkLeadsToSrp(OVE_LOGIN, OVE_PASSWORD), SRP_URL_PART);
  });

  it('Adjusted MMR of vehicle is displayed', () => {
    assert.isTrue(MmrMainPage.isAdjustedTextDisplayed());
  });

  it('Year - first two digits are replaced by apostrophe (\')', () => {
    assert.match(MmrMainPage.verifyApostrophReplaceTwoDigits(), /^["'][0-9]{2}$/);
  });

  it('Model truncated', () => {
    //TBD
  });

  it('Trim truncated', () => {
    //TBD
  });

  it('Vehicle image has fixed size 122x97 or 122x101', () => {
    expect(MmrMainPage.verifyImageHasFixedSize()).to.be.oneOf(['122x97', '122x101']);
  });

  it('Odometer with units label is displayed (mi/km/hrs)', () => {
    expect(MmrMainPage.verifyVehicleOdometerUnits()).to.be.oneOf(['mi', 'km', 'hrs']);
  });

  it('CR or SD and grade are displayed (if present)', () => {
    // TBD
    // CR 0.0-5.0 //example (CR 4.5)
    // if displayed
    // to.be.oneOF('CR 0.0', '')
  });

  it('Entire vehicle card links to VDP', () => {
    // TBD
  });

  it('Final viewable vehicle partly truncated', () => {
    // TBD
  });

});