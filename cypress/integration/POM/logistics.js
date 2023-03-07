export class logis{
    visitLogistics(){
        cy.contains('Logistics').click({force:true});
    }
    fillTransport(n_bags, peakDuration, transField,canServe){
        cy.get('#pcgOfFieldTransportedByOrg').type(n_bags)
        cy.get('#transportPeakDuration').type(peakDuration)
        cy.get('#pcgOfTransportedFieldsServedInPeak').type(transField)
        cy.get('#fieldsTransporterCanServeDaily').type(canServe)
        cy.get('.css-oev5bd > .MuiButton-root').click()
        cy.get('#totalTransportersRequired').invoke('val').should('eq','21')
        }
}