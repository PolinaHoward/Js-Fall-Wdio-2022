const Commands = require('../Commands');


class DarkSkyPage{

commands = new Commands();
 
       // Locators for Web-Elements on the DarkSkyPage
       feelsLikeTempLocator= '//span[@class="feels-like-text"]'
       lowTempLocator = `//span[@xpath='2']`
       highTempLocator = `//span[@xpath='1']`


      // Functions to interact with the Web-Elements on the DarkSkyPage
      async getFeelsLikeTempNumber(){
        await this.commands.stringToNumber(this.feelsLikeTempLocator)
      }
















}