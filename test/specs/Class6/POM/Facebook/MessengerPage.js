const Commands = require('../Commands');

class MessengerPage {


messengerCheckBox = '//input[@type="checkbox"]' //keep me signed in checkbox
logInButton ='#loginbutton'



async isKeepMeSignedInCheckBox_Selectd(){
    return await this.commands.isWebElementSelected(this.messengerCheckBox)
}

async clickLogInButton(){
    await this.commands.clickWebElement(this.logInButton)
}













//1. Click Messenger. -done
//  await browser.url('https://www.facebook.com');
//  await $('=Messenger').click();

/**
 * 
 *  //2. Verify "Keep me signed in" is NOT selected --
 * done
 * 
 *  const messengerCheckBox = await $('//input[@type="checkbox"]').isSelected();
     expect(messengerCheckBox, '"Keep me signed in" is already selected').to.be.false;
 * 
 * 
 *  //3. Click "Log in" button
 *  await $('#loginbutton').click();
 * 
 


 */


}
module.exports = MessengerPage