import { browser } from "protractor";
import { AccountPage } from "../../pages/accounts/accounts.page";

describe('Verify search function', () => {
  it('Search by payee @smoke', async () => {
    const accountPage = new AccountPage();
    await accountPage.openHomePage();
    await accountPage.enterSearchByPayee("Salary");
    await accountPage.verifyListOfPayee("Salary");
  });

  it('Search by account', async () => {
    const homepage = new AccountPage();
    await homepage.openHomePage();
    await homepage.selectSearchByAccount("Cash");
    await homepage.verifyListOfAccount("Cash");
  });
});