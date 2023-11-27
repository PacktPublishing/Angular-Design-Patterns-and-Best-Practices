describe('Login Page:', () => {
  it('should login to the diary with the correct credentials.', () => {
    cy.visit('/');
    cy.get('#username').type('mario');
    cy.get('#password').type('1234');
    cy.get('[data-cy="submit"]').click();
    cy.contains('Workout diary');
  });
});
