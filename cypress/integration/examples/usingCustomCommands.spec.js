/// <reference types="Cypress" />

describe('My first test', function (){

  it('verify the page title', function(){
    
    cy.visit("https://demo.peppercloud.com/login")    //Visit website
    cy.login("qa-tester@peppercloud.io","Jana@123")
    cy.title().should('eq',"Pepper Cloud CRM")        //Verify title
    
  });
})