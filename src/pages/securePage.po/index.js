const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class SecurePage extends BaseForm {
    
    constructor() {
        super(elements.messageLbl, 'Secure page');
    }

    async getTextFromMessage() {
        return elements.messageLbl.getText();
    }

};

module.exports = new SecurePage();