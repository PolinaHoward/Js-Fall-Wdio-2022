const LoginPage = require('../../POM/Facebook/LoginPage') 
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const { expect } = require('chai');


describe('Login Test Suite', () => {
    
    it('Verify user gets error for invalid credentials', async () => {
        const loginPage = new LoginPage();
        const loginErrorPage = new LoginErrorPage();

        /**_
         * 1. Launch facebook.com
         * 2. Enter invalid credentials (@#$%^& / abcd@1234)
         * 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Enter invalid credentials (@#$%^& / abcd@1234)
        await loginPage.enterLoginEmail('@#$%^&');
        await loginPage.enterLoginPassword('abcd@1234');
        await loginPage.clickLoginInButton();

        // 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
        //expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login error message is NOT displayed').to.be.true;
        
    });

    it.only('Close all Windows except Facebook Pay',async () => {
        const loginPage = new LoginPage();
        await browser.url('https://www.facebook.com')
        loginPage.clickInstagramLink()
        loginPage.clickPortalLink();
        loginPage.clickOculusLink();
        loginPage.clickMetaPayLink();
        const allHandles = await browser.getWindowHandles();
    
            for (const handle of allHandles) {
                await browser.switchToWindow(handle);
                const title = await browser.getTitle();
                if (!title.startsWith('Meta Pay')) {
                    await browser.closeWindow();
                }
            }
    
            await browser.pause(7000);


        
    });

    it('', () => {
        
    });
});