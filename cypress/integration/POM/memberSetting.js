describe('Member Settings Menu', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        cy.login('Excel01', 1234)
        cy.contains('Member Settings').click({force:true})
    })

    it('Select Rice and Seed type',()=>{
        cy.get('div.dropdown-heading-value').click()
        cy.contains('Rice').click() // select rice

        //unselect maize since it is selected by default
        cy.contains('Maize').click() // unselect Maize
        
        cy.get(':nth-child(2) > .rmsc > .dropdown-container') .click() //selecting seed type for rice
    }) 

    it.only('Select Maize and Seed type',()=>{
       //Maize is selected by default.

       //SM15-F seed type is selected by default, lets select PVA13B and unselect SM15-F
        
        // cy.contains('SM15-F').click() // unselect SM15-F
        cy.get(':nth-child(2) > .rmsc > .dropdown-container > .dropdown-heading > .clear-selected-button > .dropdown-search-clear-icon').click()// click the clear button
        cy.get('div.dropdown-heading-value>span').click({multiple:true}) // selecting seed type for maize
        cy.contains('PVA13B').click() // select PVA13B

        cy.get('.css-319lph-ValueContainer > .css-6j8wv5-Input').click({force:true})
        cy.get('#react-select-7-option-1').click() // select logistics for forecast group


        cy.get('.css-319lph-ValueContainer > .css-6j8wv5-Input').click({force:true}) //selecting logistics category
        cy.get('#react-select-9-option-0').click() //selecting transporter

        //clicking the update button
        cy.get('.css-oev5bd > .MuiButton-root').click()
    }) 

    it.skip('Download and Upload Templates',()=>{
        
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