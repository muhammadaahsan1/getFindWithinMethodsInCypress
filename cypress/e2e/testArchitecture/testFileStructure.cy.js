/**
 * Cypress & its Architecture
 * Cypress: A frontend web automation testing tool
 * It uses mocha framework to write tests, 
 * Mocha framework: Mocha is a JavaScript test framework that runs on Node.js and in the browser. It provides a simple, flexible, and feature-rich API for writing and executing tests in JavaScript.
 * It performs: End2EndTesting(QA), Unit & Integration Testing (Dev), API Testing (Dev & QA)
 * Installation: npm -i init   (creates package.json) > npm install cypress --save-dev
 * cypress.config.js file: configuration file
 * cypress\support\e2e.js file: support file that is bundled before each e2e spec, loaded automatically b/f y test files
 * cypress\support\command.js file: A support file that is useful for creating custom cypress commands and overwrite existing commands
 * cypress\fixtures\example.json file: Add an example fixtures file/folder
 * 
 */


/**
 * Notes Pack:
 * 1. This test file is called spec file with the extension cy.js
 * 2. A test file can contain multiple describe/test suites, and each suite contain multiple tests
 * 3. You can run the test either through cypress application>1st open cypress application> npx cypress open>...
 * 4. You can also run the test using command prompt npx cypress run 
 *  4.1. npx cypress run (runs in headless mode)
 *  4.2. npx cypress run --headed (runs in headed mode)
 *  4.3. npx cypress run --spec "path of the test file you want to run"
 *  4.4. npx cypress run --browser chrome (by default cypress runs in electron but when you enter commands from the terminal, but if you want to run in a specific browser use this command)
 *  4.5. npx cypress run --browser chrome (same as above, but in headed mode)
 *  
 */
describe('test_Suite_1',()=>{

    it('test_name_1', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

    })

    it('test_name_2', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('not.equal','')  //title should not be empty


    })
})