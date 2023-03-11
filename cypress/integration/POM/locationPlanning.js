export class location{
    visitLocation(){
        cy.contains('Location planning').click({force:true});
    }
    fillDetails(){
        cy.get('#tgeOption')
        }
}