import { ElementFinder, by, element } from "protractor";

export default class BaseTestPage {
  locator(xpath: string) {
    return element(by.xpath(xpath));
  }

  alllocator(xpath: string) {
    return element(by.xpath(xpath));
  }

  async getAllTextFromListElements(locator: string): Promise<string[]> {
    let elements = element.all(by.xpath(locator));
    let allText = [];

    await elements.each(async function (element) {
      let text = await element.getText();
      allText.push(text);
    });

    return allText;
  }

  async enterInputFieldWithLabel(label: string, value: string) {
    const inputLoc = element(
      by.xpath(`(//label[normalize-space()='${label}']/following::input)[1]`)
    );
    await inputLoc.sendKeys(value);
  }
}
