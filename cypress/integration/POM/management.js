export class management{
    visitManagement(){
        cy.contains('Management').click({force:true});
    }
    hubMagement(){
        cy.get('.bg-green').should('be.visible').and('have.text','Hubs')
        cy.get('.css-1ffq8v0-MuiTypography-root').should('have.text', 'Hub Management')
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiButton-root').should('be.visible').and('have.text','Create hub')
        cy.get('#tableTitle').should('have.text', 'Users') /// First error on application, the label should be Hubs not Users

        cy.get('#mui-5').click({force:true})
        cy.get('[data-value="25"]').click({force:true}).then(pageCount=>{
            const count=pageCount.text()
            expect(count).to.equal('25')
        })
    }
    createHub(){
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiButton-root').click()
    }
    editHub(){
        cy.get('[data-testid="ModeEditIcon"]').click({force:true}).wait(4000)
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiTypography-root').should('have.text',"Edit Hub")
        cy.get('#name').should('be.disabled').and('visible')
       
    }
    userManagement(){
        cy.get('.css-e53awj-MuiStack-root > :nth-child(2)').click()
        cy.get('.bg-green').should('be.visible').and('have.text','Users')
        cy.get('.css-1ffq8v0-MuiTypography-root').should('have.text', 'User Management')
    }
    createUser(){
        cy.get('.css-1i9d0p9-MuiStack-root > .MuiButton-root').click()
        
    }
}