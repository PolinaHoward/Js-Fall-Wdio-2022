class Commands {




    /**
     * 
        setValue -Yes
        getText --yes
        cilck --yes
        $
        getAttribute -yes
        isDisplayed
        isEnabled
        isSelected
        selectByVisibleText 
        selectByAttribute 
        selectByIndex
       /**
        * Generic function to find if webElement is selected
        * input: string(locator)
        */
       async isWebElementSelected(locator){
        return await $(locator).isSelected()
       }
       

     /**
        * Generic function to find if webElement is displayed
        * input: string(locator)
        */
       async isWebElementDisplayed(locator){
        return await $(locator).isDisplayed()
       }

         /**
        * Generic function to find if webElement is enabled
        * input: string(locator)
        */
          async isWebElementEnabled(locator){
            return await $(locator).isEnabled()
           }
    
        /**
         * Generic fuction to find webElement
         * input: string(locator)
         */
        async findWebElement(locator) {
            return await $(locator);
        }
    
        /**
         * Generic function to enter data in a WebElement
         * name: typeInWebElement
         * input: string(dataToEnter), string(locator)
         */
        async typeInWebElement(locator, dataToEnter) {
            /*
                1. find the webElement
                2. if found, type in it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            await $(locator).setValue(dataToEnter);
        }
    
        /**
         * Generic function to click a WebElement
         * name: clickWebElement
         * input: string(locator)
         */
        async clickWebElement(locator) {
            /*
                1. find the webElement
                2. if found, click it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            await $(locator).click();
        }
    
        /**
         * Generic function to get Text of a WebElement
         * name: getTextOfWebElement
         * input: string(locator)
         */
        async getTextOfWebElement(locator) {
            /*
                1. find the webElement
                2. if found, return Text
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            return await $(locator).getText();
        }
    
        /**
         * Generic function to get Attribute value of a WebElement
         * name: getAttributeWebElement
         * input: string(locator), string(attrName)
         */
        async getAttributeWebElement(locator, attrName) {
            /*
                1. find the webElement
                2. if found, return attribute value
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            return await $(locator).getAttribute(attrName);
        }

       /**
     * Generic function to select data in dropdown (using Visible text)
     * name: selectDataInDropdown
     * input: locatorDropdown, valueWantToSelect
     */
    async selectDataInDropdown(locator, dataToSelect) {
        const dropdown = await $(locator);
        dropdown.selectByVisibleText(dataToSelect);
    }
    
    /**
     * Generic function to move mouse on any web-Element
     * name: moveMouseOn
     * input: locator
     */
     async moveMouseOn(locator) {
        await $(locator).moveTo();
    }


    /**
     * Generic function to get window handle
     * name: getHandle
     * 
     */  
     async getHandle() {
        return await browser.getWindowHandle();
    }

    /**
     * Generic function to get ALL window handle
     * name: getHandles
     * 
     */  
    async getHandles() {
        return await browser.getWindowHandles();
    }

    /**
     * Generic function to switch to a new handle
     * name: switchToWindowHandle
     * input: newHandle
     * 
     */  
    async switchToWindowHandle(newHandle) {
        return await browser.switchToWindow(newHandle);
    }

    async stringToNumber(locator){
        return parseFloat($(locator))
    }
    

    
    }
    module.exports = Commands;