import { browser, by, element, protractor } from "protractor";
import { AccountPage } from "../../pages/accounts/accounts.page";

describe('Waiting in Protractor', () => {
  it('Demo implicit wait', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.manage().timeouts().implicitlyWait(6000);
    await browser.get("http://the-internet.herokuapp.com/dynamic_loading/2");
    await element(by.xpath("//button[normalize-space()='Start']")).click();
    await element(by.xpath("//h4[normalize-space()='Hello World!']")).click();
  });

  it('Demo explicit wait', async () => {
    var expCondition = protractor.ExpectedConditions;
    await browser.waitForAngularEnabled(false);
    await browser.get("http://the-internet.herokuapp.com/dynamic_loading/2");
    await element(by.xpath("//button[normalize-space()='Start']")).click();
    await browser.wait(expCondition.visibilityOf(
      element(by.xpath("//h4[normalize-space()='Hello World!']"))), 1000);
  });
});