export class goalSetting {

    visitGoal(){
        cy.contains('Goal Settings').click({force:true});
    }
    
    setHaSize(Ha){
        cy.get('#hectareGoalForSM15-F').clear().type(Ha)
        cy.get(':nth-child(3) > .MuiBox-root > .MuiButton-root').click()
        cy.get('#totalHubHaGoal').should('contain',Ha)
    }
    clickUpdate(){
        cy.get('.css-oev5bd > .MuiButton-root').click({force:true})
        cy.get('h3').should('have.text','Form has been saved successfully')
    }
}
