///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { memSettings } from "./POM/memberSetting";

describe("General Settings", () => {
  let credentials;
  const my_login_page = new loginPage();
  const memSet = new memSettings();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    memSet.visitMemSettings();
  });
  
  it('Select Rice and Seed type',()=>{
 memSet.selectRice()
})

  
  it('Select Maize and Seed type',()=>{

    memSet.selectMaize()
})


it('Download and Upload Templates',()=>{

    memSet.upDownload

})


})