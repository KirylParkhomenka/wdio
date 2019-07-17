class AutocheckCarfaxPage { 

  get autoCheckLink() { return $('#autoCheckLink'); }
  get carFaxLink() { return $('#carfaxLink'); }

  isAutoCheckLinkDisplayed() {      
    this.autoCheckLink.waitForDisplayed(10000);
    return this.autoCheckLink.isDisplayed();
  }

  isCarFaxLinkDisplayed() {      
    return this.autoCheckLink.isDisplayed();
  }

  clickAutoCheckLink() {
    this.autoCheckLink.waitForDisplayed(10000);
    this.autoCheckLink.click();
  }

  clickCarFaxLink() {
    this.carFaxLink.waitForDisplayed(10000);
    this.carFaxLink.click();
  }
}
export default new AutocheckCarfaxPage();