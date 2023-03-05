export class lockInput{
    visitLockInput(){
        cy.contains('Lock Input').click({force:true})
    }

    saveButton(){
        cy.get('.MuiBox-root > .MuiButton-root').click()
  
    }
}