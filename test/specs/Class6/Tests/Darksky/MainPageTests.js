const DarkSkyPage =require('../../POM/DarkSky/DarkSkyPage')
const {expect} = require('chai')

describe('DarkSky Main Page Test Suite',async()=>{
   
     it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async()=>{

       const darkSkyPage = new DarkSkyPage();


       //1.Launch darksky
       await browser.url('https://www.darksky.net/')

       const one =await  darkSkyPage.getFeelsLikeTempNumber()
       console.log(one)







     })





















})