const BasePage = require("../../framework/basePage/basePage");
const {sliderPageLocators} = require("../locators/sliderPageLocators");
const Label = require("../../framework/baseElement/label");
const Logger = require('../../framework/utils/logger');
const Slider = require("../../framework/baseElement/slider");

class SliderPage extends BasePage {
    constructor() {
        super(sliderPageLocators.sliderTitle);
        this.uniqueLocator = sliderPageLocators.sliderTitle;
    }

    async _getSlider() {
        Logger.infoLog('Getting Slider element');
        return new Slider('slider', sliderPageLocators.slider);
    }

    async _getSliderValueField() {
        Logger.infoLog('Getting Slider value field');
        return new Label('sliderValueField', sliderPageLocators.sliderValue);
    }

    async sliderPageIsDisplayed() {
        Logger.infoLog('Checking displaying of Slider page');
        return this.isDisplayed();
    }

    async dragAndDropSlider(x) {
        Logger.infoLog(`Value of slider position is ${x}`);
        return (await this._getSlider()).dragAndDropSlider(x);
    }

    async getSliderValue() {
        Logger.infoLog(`Getting slider value`);
        return (await this._getSliderValueField()).getText();
    }

}

module.exports = SliderPage;