const Commands = require('../Commands');

class MessengerErrorPage {

    errorLink = '=Find your account and log in.'
    continueButton = '#loginbutton'
    errorCheckBox = '//input[@type="checkbox"]'
    keepMeSignedInCheckBox = '//label[@class="uiInputLabelInput"]'

     
async isAccountErrorMessegedDisplayed(){
    return await this.commands.isWebElementDisplayed(this.errorLink)
}

async isContinueButtonEnabled(){
    return await this.commands.isWebElementEnabled(this.continueButton)
}

async isKeepMeSignedInSelected(){
    return await this.commands.isWebElementSelected(this.errorCheckBox)
}

async clickKeepMesignedInCheckBox(){
    await this.commands.clickWebElement(this.keepMeSignedInCheckBox)
}
async isKeepMeSignedInCheckBoxSelected(){
    return await this.commands.isWebElementSelected(this.keepMeSignedInCheckBox)
}




/*     //4. Verify link (Find your account and log in.) is displayed -done
 * const errorLinkDisplayed = await $('=Find your account and log in.').isDisplayed();
 *  expect(isErrorMessageDisplayed, '"Find your account and log in." is  displayed').to.be.true;
 * 
 * //5. Verify "Continue" button is enabled -done
 * const isContinueEnabled = await $('#loginbutton').isEnabled();
 * expect(isContinueButtonEnabled, '"Continue" button is  not enabled').to.be.true; 
 * 
 *  //6. Verify "Keep me signed in" is NOT selected-done
 * const errorCheckBox = await $('//input[@type="checkbox"]');
        const isErrorCheckBoxSelected = await errorCheckBox.isSelected();
          expect(iskeepSignedInSelected2, '"Keep me signed in" is already selected').to.be.false;

    //7. Click "Keep me signed in" checkbox
    
await $('//label[@class="uiInputLabelInput"]').click();

// 8. Verify "Keep me signed in" is selected

 const errorCheckBox2 = await $('//input[@type="checkbox"]');
        const isErrorCheckBoxSelected2 = await errorCheckBox2.isSelected();
        expect(iskeepSignedInSelected2_, '"Keep me signed in" is already selected').to.be.true;






*/








}
module.exports = MessengerErrorPage