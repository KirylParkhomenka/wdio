import { assert } from 'chai';
import MmrMainPage from '../src/pages/MmrMainPage';

const URL = 'https://mmr.manheim.man-qa2.com/';
const TEST_VIN = '2CNFLEEW5A6233436';

describe('mmr.manheim.man-qa2.com', () => {
  it('Vidget should be displayed', () => {

      MmrMainPage.openMmrPage(URL);
      MmrMainPage.performSearchByTestVin(TEST_VIN);
      
      assert.isTrue(MmrMainPage.isSimilarVehicleVidgetDisplayed());
    });
});