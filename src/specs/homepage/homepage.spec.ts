import { browser } from "protractor";
import { HomePage } from "../../pages/homepage/homepage.page";

describe('Verify search function', () => {
  it('Search by paynee', async () => {
    const homepage = new HomePage();
    await homepage.openHomePage();
    await homepage.enterSearchByPayee("Salary");
    await homepage.verifyListOfPayee("Salary");
  });

  xit('Search by account', async () => {
    const homepage = new HomePage();
    await homepage.openHomePage();
    await homepage.selectSearchByAccount("Cash");
    await homepage.verifyListOfAccount("Cash");
  });
});