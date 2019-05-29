import { assert } from 'chai';
import { expect } from 'chai';
import MmrMainPage from '../src/pages/MmrMainPage';

const URL = 'https://mmr.manheim.man-qa2.com/';
const TEST_VIN = 'JHMZF1C6XBS016143';

describe('Mmr Main Page', () => {
  
  it('Vidget is displayed', () => {

      MmrMainPage.openMmrPage(URL);
      MmrMainPage.performSearchByTestVin(TEST_VIN);
      
      assert.isTrue(MmrMainPage.isSimilarVehicleComponentDisplayed());
    });

    it('Component Heading is displayed', () => {

      //Add title equals 'Similar Vehicles for Sale'
      assert.isTrue(MmrMainPage.isSimilarVehicleHeadingDisplayed());
    });

    it('Horizontal scroll button is displayed', () => {
      //TBD
    });

    it('"View All>" link is displayed and navigates to an SRP', () => {
      //TBD
      //isDisplayed
      //navigates to 
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

    it('Vehicle image is displayed', () => {
      //TBD
    });

    it('Odometer with units label is displayed (mi/km/hrs)', () => {
      //TBD
      //(mi/km/hrs)
    });

});