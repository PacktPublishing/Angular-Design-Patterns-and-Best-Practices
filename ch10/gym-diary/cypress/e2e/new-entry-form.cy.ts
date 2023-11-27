describe('New Entry Form:', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#username').type('mario');
    cy.get('#password').type('1234');
    cy.get('[data-cy="submit"]').click();
  });

  it('Should register a new entry in the workout diary', () => {
    cy.get('[data-cy="new-entry-menu"]').click();
    cy.contains('Date');
    cy.get('#date').type('2023-08-08');
    cy.get('#exercise').type('Front Squat');
    cy.get('#sets').type('4');
    cy.get('#reps').type('6');
    cy.get('[data-cy="submit"]').click();
    cy.contains('Item Created!');
  });

  it('should validate field information and show the validation message', () => {
    cy.get('[data-cy="new-entry-menu"]').click();
    cy.contains('Date');
    cy.get('#date').type('2023-08-08');
    cy.get('#exercise').type('Front Squat');
    cy.get('#sets').type('3');
    cy.get('#reps').type('6');
    cy.contains('Sets is required and must be a positive number.');
    cy.contains('sets is required and must be multiple of 2.');
  });
});
