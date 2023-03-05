///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { generalSettings } from "./POM/generalSettings";
import { goalSetting } from "./POM/goalSetting";

describe("Goal Settings", () => {
  let credentials;
  const my_login_page = new loginPage();
  const genSet = new generalSettings();
  const goal = new goalSetting();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    genSet.genSetPage()
    goal.visitGoal();
  });
  
  it('Clicking on the save button',()=>{
    goal.setHaSize(30)
    goal.clickUpdate()
})

})