///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { lockInput } from "./POM/lockInput";

describe("Lock Input", () => {
  let credentials;
  const my_login_page = new loginPage();
  const lock = new lockInput();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    lock.visitLockInput();
  });
  
  it('Clicking on the save button',()=>{
        lock.saveButton()
})

})