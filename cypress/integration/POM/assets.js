export class assets{
    visitAssets(){
        cy.contains('Assets').click({force:true});
    }
}