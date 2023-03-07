///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { creditSus } from "./POM/creditSustainability";

describe("Farm Input", () => {
  let credentials;
  const my_login_page = new loginPage();
  const cred = new creditSus();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    cred.visitCredSus();
  });
  
    
  it.only('Checking for the image and entering credAssumptions',()=>{
    cred.isVideoPresent()
    cred.enterCredAssump(50,64,85,90)
    cred.validateSummary()
    cred.satisfation()
})

})