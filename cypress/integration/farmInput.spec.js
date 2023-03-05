///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { farmInput} from "./POM/farmInput"

describe("Farm Input", () => {
  let credentials;
  const my_login_page = new loginPage();
  const farm = new farmInput();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    farm.visitFarmInput();
  });
  
  it('Clicking on the save button',()=>{
        farm.saveButton()
})

})