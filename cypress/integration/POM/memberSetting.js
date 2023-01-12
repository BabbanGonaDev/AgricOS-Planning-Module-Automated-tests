describe('Member Settings Menu', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        cy.login('Excel01', 1234)
        cy.contains('Member Settings').click({force:true})
    })

    it.skip('Select Rice and Seed type',()=>{
        cy.get('.dropdown-heading').click()
        cy.contains('Rice').click() // select rice

        cy.get(':nth-child(2) > .rmsc > .dropdown-container') .click() //selecting seed type for rice
    }) 
    
    
    it('Select Maize and Seed type',()=>{
        cy.get('.dropdown-heading').click()
        cy.contains('Maize').click() // select maize
        cy.get(':nth-child(2) > .rmsc > .dropdown-container') // selecting seed type for maize
      

    }) 
})