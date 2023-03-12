export class assets{
    visitAssets(){
        cy.contains('Assets').click({force:true});
    }
    personnelTools(cost){
        cy.get('.css-2s0ezh > :nth-child(1) > .css-1z0d5zw > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click()
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer').click({force:true})
        cy.get('#phoneToolShare').click()
        cy.contains('Per user').click({force:true})

        cy.get('.css-18uxy28 > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click()
        cy.get(':nth-child(5) > .select-item > .item-renderer > span').click({force:true})
        cy.get('#unitCostOfphone').type(cost,{force:true})
    }
    consummables(number,amount){
        cy.get(':nth-child(2) > .css-1z0d5zw > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click()
        cy.contains('Fuel').click()
        
        cy.get(':nth-child(2) > :nth-child(4) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click({force:true})
        //there are no options in the dropdown

        cy.get('#unassignedUsersOffuel').click({force:true})
        cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click({force:true})
        
        cy.get('#numberOfUnassignedUsersOffuel').type(number,{force:true})

        cy.get('#frequencyOfBudgetChangeForfuel').click({force:true})
        cy.get('#menu-frequencyOfBudgetChangeForfuel > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click({force:true})

        cy.get('#usersMonthlyBudgetForfuelY1').type(amount,{force:true})
        
        //Assertions
        cy.get(':nth-child(2) > .css-10x1jd2 > .sc-bczRLJ > table > tbody > :nth-child(3) > :nth-child(2)').should('contain',number)
        cy.get(':nth-child(2) > .css-10x1jd2 > .sc-bczRLJ > table > tbody > :nth-child(3) > :nth-child(3)').should('contain',number*amount)
    }
    inputStorage(qty,capacity,rent){
        cy.get('.css-2s0ezh > :nth-child(3) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click({force:true})
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > span').click()
        
        cy.get('#inputDivider').click({force:true})
        cy.get('.MuiList-root > [tabindex="-1"]').click({force:true})

        cy.get('#warehouseInputQuantity').type(qty,{force:true})
        cy.get('#warehouseMTperSqmInputCapacity').type(capacity)
        cy.get('#warehouseInputAnnualRentperSqm').type(rent)
    }
    outputStorage(MTeach,MTstored,cost){
        cy.get('.css-2s0ezh > :nth-child(4) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click({force:true})
        cy.get(':nth-child(4) > .select-item > .item-renderer > span').click({force:true})

        cy.get('#outputDivider').click({force:true})
        cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click({force:true})

        cy.get('#siloOutputQuantity').type(MTeach)
        cy.get('#siloMTperSqmOutputCapacity').type(MTstored)
        
        cy.get('#siloOutputCost').type(cost)
    }
    save(){
        cy.get('.css-oev5bd > .MuiButton-root').click()
    }
}