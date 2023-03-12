///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { management } from "./POM/management";

describe("Management Menu", () => {
  let credentials;
  const my_login_page = new loginPage();
  const manage = new management();

  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    manage.visitManagement();
  });

  it("Hub Management", () => {
    manage.hubMagement()
  });
  it("Create new hub", () => {}); // functionality not yet implemented

  it.only("Edit a hub", () => {
    manage.editHub()
  });
  it("User management", () => {
    manage.userManagement()
  });
  it("Create new user", () => {
    manage.createHub()
  });
});
