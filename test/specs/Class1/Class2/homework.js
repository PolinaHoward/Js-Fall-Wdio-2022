/**
 * Automate below testcase:
 * 
 * Due date: Nov 18 (EOD)
 * 
 * TC-1:
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account
 * 3. Verify female-gender button is not selected
 * 4. Verify male-gender button is not selected
 * 5. Verify custom-gender button is not selected
 * 6. If female gender is NOT selected, then click on female gender radio button
 * 7. Verify female-gender button is selected
 *
 * 
 * 
 * 
 * 
 */


const { expect } = require("chai");
const { it } = require("mocha");

describe('WebElements Test cases', () => {

it('Launch facebook.com', async () => {
    await browser.url('/')
})    

it('Click Create New Account', async () => {
    const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        await browser.pause(7000);

})

it('Verify female-gender button is not selected on Sign up page', async () => {

    await browser.url('/');

    const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(7000)

        const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

})
it('Verify male-gender button is not selected on Sign up page', async () => {

          await browser.url('/');

          const createNewAccountButton = await $('=Create new account');
          createNewAccountButton.click();

        await browser.pause(7000)

        const maleRadioButton = await $('input[value="2"]');
        const isMaleGenderSelected = await maleRadioButton.isSelected();
        expect(isMaleGenderSelected, 'Male gender is already selected').to.be.false;
})
it('Verify custom-gender button is not selected on Sign up page', async () => {

    await browser.url('/');
  
    const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(7000)

const costumRadioButton = await $('input[value="-1"]');
const isCostumGenderSelected = await costumRadioButton.isSelected();
expect(isCostumGenderSelected, 'costum gender is already selected').to.be.false;

})

it('If female gender is NOT selected, then click on female gender radio button', async () => {

    await browser.url('/')

    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();
    await browser.pause(7000)
     const femaleRadioButton = await $('input[value="1"]');
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected,'Female gender is already selected').to.be.false;
        await browser.pause(7000)

        if(!isFemaleGenderSelected ){
           await femaleRadioButton.click()
        }
   
})


it('Verify female-gender button is selected', async () => {
    await browser.url('/')

    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();
    await browser.pause(7000)

     const femaleRadioButton = await $('input[value="1"]');
     const clicked = femaleRadioButton.click()
     await browser.pause(7000)
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, 'female-gender button is not selected' ).to.be.true;
        await browser.pause(7000)

})



})