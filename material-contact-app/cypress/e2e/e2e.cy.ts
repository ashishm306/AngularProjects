describe('E2E Testing for Contact App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  });
  it('should check header component for brand name', () => {
    cy.get('#brand').should('have.text', 'Contact Manager');
  })


  it('should check for wrong credentials', () => {
    cy.get('#Email').type('Amit@gmail.com');
    cy.get('#Password').type('123456348');
    cy.get('#btnLogin').click();
    cy.get('.mat-simple-snack-bar-content').should('have.text', 'Invalid Credentials');
    cy.wait(2000);
  })

  it('should check for correct credentials', () => {
    cy.get('#Email').type('Amit@gmail.com');
    cy.get('#Password').type('123456');
    cy.get('#btnLogin').click();
    cy.get("#main-heading").should('have.text', 'Contact List');
  });

})