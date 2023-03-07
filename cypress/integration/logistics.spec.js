///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { logis } from "./POM/logistics";

describe("Farm Input", () => {
  let credentials;
  const my_login_page = new loginPage();
  const logistic = new logis();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    logistic.visitLogistics();
  });
  
    
  it('Fill transporter information',()=>{
   logistic.fillTransport(15,80,6,7)
})

})