///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { assets } from "./POM/assets";

describe("Assets", () => {
  let credentials;
  const my_login_page = new loginPage();
  const asset = new assets();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    asset.visitAssets();
  });
  
    
  it('Fill Assets details',()=>{
    asset.personnelTools(2000)
    asset.consummables(3,30000)
    asset.inputStorage(90,100000,12000)
    asset.outputStorage(2000,35000,6000)
    asset.save()
})

})