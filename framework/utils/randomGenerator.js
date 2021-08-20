const Logger = require('./logger');

function randomStr(length) {
   Logger.infoLog('Random string generating');
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getRandomIntInclusive(min, max) {
   Logger.infoLog('Random string generating with a given interval');
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

 module.exports = {randomStr, getRandomIntInclusive};