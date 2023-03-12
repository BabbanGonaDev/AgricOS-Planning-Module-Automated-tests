///<reference types="cypress"/>
import { loginPage } from "./POM/loginPage";
import { personnel } from "./POM/personnelPlanning";

describe("Personnel Planning", () => {
  let credentials;
  const my_login_page = new loginPage();
  const person = new personnel();
  
  // importing the stored username and password
  before(() => {
    cy.fixture("Login_credentials").then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    my_login_page.navigate("/");
    my_login_page.validLogin(credentials.username, credentials.password);
    person.visitPersonnel();
  });
  
    
  it('Fill personnel planing details',()=>{
   person.teamStafing()
   person.advisorSupervisor()
   person.salariesAdvisor()
   person.directCoachSup()
   person.TGEcoachSup()
   person.salariesCoach()
   person.harvestAdvisor()
   person.inputDistribution()
   person.distributionCenterSalary()
   person.inventoryControlTeam()
   person.harvestCollection()
   person.inventoryControlTeam_harvest()
   person.shipmentTeam()
})

})