/// <reference types="Cypress" />

describe('Frontend Tests', function (){
  let lname = "Hola"
  let company = "Company01"
  let user_email = "ha01@compan001.com"
  //validating lead creation assuming the view is set to default table view
  it('Verify Lead creation using “Create New”', function(){

    cy.visit('https://demo.peppercloud.com/login')    //Visit website
    cy.get('#email').type("qa-tester@peppercloud.io") //Enter Email
    cy.get('#password').type("Jana@123")              //Enter Password
    cy.get('button[type=submit]').click()             //Click login button
    cy.wait(5000)

    cy.get('#LF1').click()
    cy.get('input#F3').type(lname)
    cy.get('input#F4').type(company)
    cy.get('input#F7').type(user_email)
    cy.get('#SAVE').click()
    
    cy.get('div.tbody > div:nth-child(1) span[tabindex=1]').should('be.visible').should('have.text',lname)
  });
  /*
  it('Verify select all', function(){

    cy.visit('https://demo.peppercloud.com/login')    //Visit website
    cy.get('#email').type("qa-tester@peppercloud.io") //Enter Email
    cy.get('#password').type("Jana@123")              //Enter Password
    cy.get('button[type=submit]').click()             //Click login button
    cy.wait(3000)

    cy.get('input[type=checkbox][title="Toggle All Rows Selected"]').check()  //select toggle all checkbox
    
    // cy.get()

  });

  it('Verify Lead creation using “Create New”', function(){

  });

*/
})