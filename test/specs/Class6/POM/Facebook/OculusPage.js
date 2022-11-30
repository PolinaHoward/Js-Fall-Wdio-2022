const Commands = require('../Commands');
class OculusPage {

commands = new Commands();


//Locators
supportTab = '//span[text()="Support"]'






//Functions async isLoginErrorDisplayed() {
 async isSupportTabDisplayed(){
    return await $(this.supportTab).isDisplayed()
 } 





 
 
async getOneWindowHandle(){
    await browser.commands.getHandle()
}

async getWindowHandles(){
    await browser.commands.getHandles()
}

async switchToWindowHandle(){
    await browser.commands.switchToWindowHandle()
}










}
module.exports = OculusPage;