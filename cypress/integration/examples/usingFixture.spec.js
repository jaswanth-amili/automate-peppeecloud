/// <reference types="Cypress" />

describe('TestSuite', function(){
  
  before(() => {
    cy.fixture('details').then(function(data){
      this.data = data
    })
  });
  
  
  // afterEach(() => {
  //   //logout of the session
  //   cy.get('div.pc-header-popover-heading').click()
  //   cy.get("div[id='log-out'] span[class='pc-header-popover-body-menu-list']").click()
  // });


  //Tests
  it('Verify Lead creation using “Create New”', function(){
    cy.visit(this.data.url)    //Visit website
    cy.wait(5000)
    cy.get('#email').type(this.data.username)   //Enter Email
    cy.get('#password').type(this.data.password)    //Enter Password
    cy.get('button[type=submit]').click()   //Click login button
    cy.wait(5000)
    cy.get('#LF1').click()
    cy.wait(3000)
    cy.get('input#F3').type(this.data.lname)
    cy.get('input#F4').type(this.data.company)
    cy.get('input#F7').type(this.data.user_email)
    cy.get('#SAVE').click()
    
    cy.get('div.tbody > div:nth-child(1) span[tabindex=1]').should('be.visible').should('have.text',this.data.lname)

  });

})