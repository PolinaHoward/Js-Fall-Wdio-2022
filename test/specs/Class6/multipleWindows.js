const { expect } = require("chai");

describe('Multiple Windows Tests', () => {
    
    /**
     * To get the windowHandle stored in browser-object
     * function: getWindowHandle()
     */

    /**
     * To get the ALL windowHandles for windows opened due to automation code
     * function: getWindowHandles()
     */

    /**
     * To change/switch the handle value in browser-object
     * function: switchToWindow()
     */

    /**
     * To close the window which is connected with browser-object
     * function: closeWindow()
     */

    it('Multiple Windows Test - 1', async () => {
        
        /**
         * 1. Launch facebook.com
         * 2. Click on Oculus
         * 3. Verify Support tab is displayed
         * 4. Verify the Oculus page is launched in new window;
         * 
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com')

        // 2. Click on Oculus
        await $('=Oculus').click();

        /**
         * connect browser with Oculus window
         */

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

         // 3. Verify Support tab is displayed
         const isSupportDisplayed = await $('//span[text()="Support"]').isDisplayed();
        
        expect(isSupportDisplayed, ' Support tab is NOT displayed ').to.be.true
           
         ///console.log(`\n\n isSupportDisplayed -> ${isSupportDisplayed} \n\n`);
 
         // 4. Verify the Oculus page is launched in new window
         expect(allHandles.length, 'not in a new window').to.equal(2);


    });

        it.only('Close all Windows except Facebook Pay', async () => {
        
            /**
             * 1. Launch facebook.com
             * 2. Click on Instagram
             * 3. Click on Portal
             * 4. Click on Oculus
             * 5. Click on Meta Pay
             * 6. Close all windows except 'Meta Pay' window
             * 7. Verify 'Using Meta Pay' is displayed
             * 8. Move mouse on 'Using Meta Pay'
             * 9. Verify 'Online Checkout' option is displayed
             */
            // 1. Launch facebook.com
            await browser.url('https://www.facebook.com')
    
            // 2. Click on Instagram
            await $('=Instagram').click();
    
            // 3. Click on Portal
            await $('=Portal').click();
    
            // 4. Click on Oculus
            await $('=Oculus').click();
    
            // 5. Click on Meta Pay
            await $('=Meta Pay').click();
    
            // 6. Close all windows except 'Meta Pay' window
            /*
                switch on every window
                if title NOT starts with 'Meta Pay'
                    close window
            */
            const allHandles = await browser.getWindowHandles();
    
            for (const handle of allHandles) {
                await browser.switchToWindow(handle);
                const title = await browser.getTitle();
                if (!title.startsWith('Meta Pay')) {
                    await browser.closeWindow();
                }
            }
    
            await browser.pause(7000);
    
           //7. Verify 'Using Meta Pay' is displayed
           //div[contains(@class, "_8mmr")]//*[@id='u_0_5_v8']');   //idk hot to make the cecond part not commented
          

            //8. Move mouse on 'Using Meta Pay'

          
              // 9Verify 'Online Checkout' option is displayed


        });
    
 
   

    })
