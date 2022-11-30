const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage')
const OculusPage = require('../../POM/Facebook/OculusPage')


describe('Multiple Windows Tests', () => {
    it('Testcase-1', async () => {
    
        const loginPage = new LoginPage();
        const oculusPage = new OculusPage();
    // 1. Launch facebook.com
        await browser.url('https://www.facebook.com')

    // 2. Click on Oculus
    loginPage.clickOculusLink();
    await browser.pause(3000)
    
//functions are created in oculuspage ,probabaly worng,check later
        const fbLoginHandle = await browser.getWindowHandle();
        console.log(` \n fbLoginHandle -> ${fbLoginHandle} \n`);


        const allHandles = await browser.getWindowHandles();
        console.log(` \n allHandles -> ${allHandles} \n`);

        for (const handle of allHandles) {
            if (handle !== fbLoginHandle) {
                browser.switchToWindow(handle);
                break;
            }
        }

        await browser.pause(7000);
        expect(await oculusPage.isSupportTabDisplayed(), 'Support tab is NOT displayed').to.be.true;
 
     // 4. Verify the Oculus page is launched in new window
         expect(allHandles.length, 'not in a new window').to.equal(2);
   
    })















})

