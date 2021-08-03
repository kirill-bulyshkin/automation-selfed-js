const BaseElement = require("./baseElement");

class TextArea extends BaseElement {

    async clearValue() {
       return (await this.findElement()).clear();
    }

    async setValue(value) {
        return (await this.findElement()).sendKeys(value);
    }
}

module.exports = TextArea;