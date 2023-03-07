export class creditSus{
    visitCredSus(){
        cy.contains('Credit Sustainability').click({force:true})
    }
    isVideoPresent(){
        cy.get('.css-1hyaejf > img').should('be.visible')
    }
    enterCredAssump(bpH,flPH,awPB,apPK){
        cy.get('#bagsPerHectare').clear().type(bpH)
        cy.get('#bagsOfProducePerHecatre').clear().type(flPH)
        cy.get('#avgWeightPerBag').clear().type(awPB)
        cy.get('#avgPricePerKg').clear().type(apPK)
    }

    validateSummary(){
        cy.get('#harvestAdvPerHectare').invoke('val').should('eq','489600')
        cy.get('#farmLoanPerHectare').invoke('val').should('eq','0')
        cy.get('#netHarvestAdv').invoke('val').should('eq','489600')
        cy.get('#percentNetHarvestAdv').invoke('val').should('eq','100')
    }

    satisfation(){
        cy.get('#satisfiedWithMargin').click()
        cy.contains('Yes').click({force:true}) // select Yes
        cy.get('#makeChangesToCredit').click()
        cy.contains('No').click({force:true}) // select No

        cy.get('.css-oev5bd > .MuiButton-root').click({force:true}) // click the save button
    }
}