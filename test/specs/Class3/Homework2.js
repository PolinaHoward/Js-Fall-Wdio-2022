// Due date: Nov 21 (Mon)

/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 * 
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */
 const moment = require('moment');
 const { expect } = require("chai");
 const { it } = require("mocha");
 
 describe('Test Case', () => {

     it(' Verify current date is displayed on Sign-Up form', async () => {
    
    await browser.url("/");
    await browser.pause(1000);
   
    const createNewAccountButton = await $("=Create new account");
    createNewAccountButton.click();
    await browser.pause(5000);


    const now = moment().format('ll');
    const todaysDate = await $('//span[@data-type="selectors"]');
    const verifyTodaysDate = await todaysDate.isDisplayed(now)
    
    expect(verifyTodaysDate, " This is not todays Date").to.be.true
    console.log(`todays date is ->${todaysDate}`);
  });
      
        
      
        


/**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 * 
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */

 it(' Verify user gets error when submits empty login form', async () => {
    //1. Launch facebook.com
    await browser.url('/')
     

    await $(`//input[@id='email']`).setValue('');
    await $(`//input[@id='pass']`).setValue('');

    const loginButton = await $('<button>');
    loginButton.click();

    await browser.pause(5000);


     const textError = $(`//*[@class='_9ay7']`)
     const isLoginErrorDisplayed = await textError.isDisplayed();
        expect(isLoginErrorDisplayed, 'Login error is NOT displayed').to.be.true;


 })
   

/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 * 
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 * 
 */
 it(' Verify user gets error when submit empty login on messenger screen', async () => {
    await browser.url('/')
      
    //1. Click Messenger
    const webElement = await $(`//a[text()='Messenger']`)
    await webElement.click()
    await browser.pause(5000);

    //2. Verify "Keep me signed in" is NOT selected
        const keepSignedIn = await $('input[value="1"]');
        const iskeepSignedInSelected = await keepSignedIn.isSelected();
        expect(iskeepSignedInSelected, '"Keep me signed in" is already selected').to.be.false;

    //3. Click "Log in" button
     const logInButton = $(`//*[@id='loginbutton']`)
     await logInButton.click()
     await browser.pause(4000)

     //4. Verify link (Find your account and log in.) is displayed
        const errorMessage = $(`//a[contains(text() , 'account and')]`)
        const isErrorMessageDisplayed = await errorMessage.isDisplayed();
        expect(isErrorMessageDisplayed, '"Find your account and log in." is  displayed').to.be.true;
     
     //5. Verify "Continue" button is enabled
       const continueButton = $(`//*[@id='loginbutton']`)  
       await continueButton.click()
       const isContinueButtonEnabled = await continueButton.isEnabled()
       expect(isContinueButtonEnabled, '"Continue" button is  not enabled').to.be.true; 

     //6. Verify "Keep me signed in" is NOT selected
     const keepSignedIn2 =  $('input[value="1"]');
     const iskeepSignedInSelected2 = await keepSignedIn2.isSelected();
     expect(iskeepSignedInSelected2, '"Keep me signed in" is already selected').to.be.false;

     //7. Click "Keep me signed in" checkbox
      const keepMeSignedInButton = $(`//label[text() = 'Keep me signed in']`)
     await keepMeSignedInButton.click()
     await browser.pause(4000)

     // 8. Verify "Keep me signed in" is selected
     const keepSignedIn2_ =  $('input[value="1"]')
     const keepSignedIn3 = keepSignedIn2_.click()
     const iskeepSignedInSelected2_ = await keepSignedIn2_.isSelected();
     expect(iskeepSignedInSelected2_, '"Keep me signed in" is already selected').to.be.true;

     


    
      




     
 })

/**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue 
 */
 it('Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue ', async () => {
      await browser.url('https://www.darksky.net/')
     

       const high =await $(`//*[@class='high-temp-text']`).getText() //high 
     const low = await $(`//*[@class='low-temp-text']`).getText() //low
       const feels = await $(`//*[@class='feels-like-text']`).getText()//fels like
     const compare = low <feels 
     const compare1 = feels < high
     expect(compare, 'num2 is NOT greater than num1').to.be.true;
     expect(compare1, 'num2 is NOT greater than num1').to.be.true;
       
       


         


      



 })
 
})


