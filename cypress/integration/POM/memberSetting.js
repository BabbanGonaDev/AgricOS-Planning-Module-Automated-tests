describe('Member Settings Menu', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        cy.login('Excel01', 1234)
        cy.contains('Member Settings').click({force:true})
    })

    it('Select Rice and Seed type',()=>{
        cy.get('.dropdown-heading').click()
        cy.contains('Rice').click() // select rice

        cy.get(':nth-child(2) > .rmsc > .dropdown-container') .click() //selecting seed type for rice
    }) 

    it('Select Maize and Seed type',()=>{
        cy.get('.dropdown-heading').click()
        cy.contains('Maize').click() // select maize
        cy.get(':nth-child(2) > .rmsc > .dropdown-container') // selecting seed type for maize
    }) 

    it.only('Download and Upload Templates',()=>{
        
        //Downloading TG and TGE templates
        
        // cy.get('[href="http://planning.agric-os.com/tg-template"]').click({force:true})
        // cy.get('[href="http://planning.agric-os.com/tge-template"]').click({force:true})
        
        //uploading TG and TGE templates
        cy.get('.css-17pwh7g-MuiButtonBase-root-MuiButton-root').attachFile('trust-group-template.csv')
        cy.get('.css-co1mgp-MuiButtonBase-root-MuiButton-root').attachFile('trust-group-template.csv')
        //clicking the upload button
        cy.get(':nth-child(3) > div > .MuiButton-root').click()
        // Adding assertion
        cy.get('h3').should('have.text','File Upload successful')
    })
})