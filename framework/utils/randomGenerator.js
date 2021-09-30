const Logger = require ('../utils/logger');

class RandomGenerators {

   randomStr(length) {
      Logger.infoLog('Generating random string');
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }

   getRandomIntInclusive(min, max) {
      Logger.infoLog('Generating random string with inclusive intervals');
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };

};

 module.exports = RandomGenerators;