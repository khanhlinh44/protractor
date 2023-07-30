import { browser } from "protractor";
import { HomePage } from "../pages/homepage/homepage.page";

describe('angularjs homepage', () => {
  it('Search by Paynee', async () => {
    browser.waitForAngularEnabled(false);// Không phải Angular
    const homepage = new HomePage();
    await homepage.openHomePage();
    await homepage.enterSearchByPayee("Salary");
    await homepage.verifyListOfPayee("Salary");
  });

  xit('test timeout', async() => {
    await browser.get("https://www.protractortest.org/#/timeouts");
    const title = await browser.getTitle();
    console.log("title = " + title);
  })
});