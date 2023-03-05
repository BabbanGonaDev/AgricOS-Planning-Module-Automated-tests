export class farmInput{
    visitFarmInput(){
        cy.contains('Farm Input').click({force:true})
    }

    saveButton(){
        cy.get('.css-oev5bd > .MuiButton-root').click({force:true})
        cy.get('h3').should('have.text','Form has been saved successfully')
    }
}