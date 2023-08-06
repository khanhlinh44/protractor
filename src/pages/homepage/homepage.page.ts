import { browser, element, by } from "protractor";
import BaseTestPage from "../basetest.page";

export class HomePage extends BaseTestPage {

  async openProtractorUrl() {
    await browser.get("https://www.protractortest.org");
  }

  nameInput = element(
    by.xpath(
      "(//label[normalize-space()='Search by Payee']/following::input)[1]"
    )
  );

  async verifyListOfAccount(arg0: string) {
    // throw new Error("actual result not match with expected");
  }

  async selectSearchByAccount(arg0: string) {
  }

  async openHomePage() {
    await browser.get('');
    await browser.driver.manage().window().maximize();
  }

  async enterSearchByPayee(name: string) {
    await this.enterInputFieldWithLabel("Search by Payee", name);
  }

  async getListOfPayee(): Promise<string[]> {
    return await this.getAllTextFromListElements(
      "//table[@class='table table-striped table-bordered']//tr//td[4]"
    );
  }

  async verifyListOfPayee(name: string) {
    const elements = element.all(
      by.xpath(
        "//table[@class='table table-striped table-bordered']//tr//td[4]"
      )
    );

    await elements.each(async function (element) {
      const text = await element.getText();
      expect(text).toContain(name);
    });
  }

  async getTitle() {
    return await browser.getTitle();
  }

  async getAccountName() {
    return await this.nameInput.getText();
  }
}
