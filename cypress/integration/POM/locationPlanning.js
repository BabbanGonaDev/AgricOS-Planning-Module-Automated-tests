export class location{
    visitLocation(){
        cy.contains('Location planning').click({force:true});
    }
    fillDetails(){
        cy.get('#tgeOption').click({force:true})
        cy.get('[data-value="yes"]').click({force:true})
        cy.get('#tg-retention-rate').type('40',{force:true})
        cy.get(':nth-child(2) > :nth-child(8) > .css-pa7wff > .MuiButton-root').click()
        cy.get(':nth-child(1) > .css-1rgwm5s-MuiTypography-root').should('have.text', 'View Program')    
    }
}