const MessengerPage = require('../../POM/Facebook/MessengerPage')
const MessengerErrorPage = require('../../POM/Facebook/MessengerErrorPage')
const LoginPage = require('../../POM/Facebook/LoginPage')
const {expect} = require('chai')
const {it} = require ('mocha')


describe('Messenger Test Suite', () =>{


it.only(' Verify user gets error when submit empty login on messenger screen' ,async() =>{

    const messengerPage = new MessengerPage();
    const messengerErrorPage = new MessengerErrorPage(); 
    const loginPage = new LoginPage();
       
    await browser.url('/');
    await loginPage.clickMessengerLink();
   // expect(messengerPage.isKeepMeSignedInCheckBox_Selectd(),'Keep me signed in" is selected').to.be.false
    await messengerPage.clickLogInButton();
    expect(messengerErrorPage.isAccountErrorMessegedDisplayed(), 'link (Find your account and log in.) is NOT displayed').to.be.true
    expect(messengerErrorPage.isContinueButtonEnabled(), '"Continue" button is NOT enabled').to.be.true
    expect(messengerErrorPage.isKeepMeSignedInCheckBoxSelected(), '"Keep me signed in" is selected').to.be.false
    await browser.pause(5000)
    await messengerErrorPage.clickKeepMesignedInCheckBox();
    expect(messengerErrorPage.isKeepMeSignedInCheckBoxSelected(), '"Keep me signed in" is NOT selected').to.be.true


     











})










})