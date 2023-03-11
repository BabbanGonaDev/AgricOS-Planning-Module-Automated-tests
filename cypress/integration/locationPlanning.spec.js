///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { location } from "./POM/locationPlanning";

describe("Location Planning", () => {
  let credentials;
  const my_login_page = new loginPage();
  const loc = new location();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    loc.visitLocation();
  });
  
    
  it('Fill location planing details',()=>{
   loc.fillDetails()
})

})