const Logger = require('../utils/logger');
const _ = require('lodash');

class RandomGenerators {

   static randomStr(length) {
      Logger.infoLog('Generating random string');
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }

   static getRandomIntInclusive(min, max) {
      Logger.infoLog('Generating random string with inclusive intervals');
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };

   static getRandomValueFromArray(array) {
      Logger.infoLog('Getting random value from array');
      return _.sample(array);
   }

};

 module.exports = RandomGenerators;