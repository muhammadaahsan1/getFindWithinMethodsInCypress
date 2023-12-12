describe('Test Suite for Testing Amazon', ()=>{

    it('test1: To test Input', ()=>{
        cy.visit('https://www.amazon.in/');
        

        
        //Instead of searching the input element in the entire dom, just search inside the parent element here #nav-bb-searchbar
        cy.get('div.nav-search-field ').within(()=>{
            cy.get('#twotabsearchtextbox').type('The doers do it!')
        })
        //Get element and click it //Hit search button    
        cy.get("div.nav-right #nav-search-submit-button").click()

    })

    it.only('test2: testing with get and multiple assertions using same command', ()=>{
        cy.visit('https://www.amazon.in/');
        cy.reload() //just testing reload
        cy.reload(true) //just testing force reload

        cy.get('div#gw-layout h2').should('be.visible').and('have.length', 29).and('contain','Up to 60% off | Styles for men');

        
    })

    it('test3: testing ', ()=>{

    })

    
})