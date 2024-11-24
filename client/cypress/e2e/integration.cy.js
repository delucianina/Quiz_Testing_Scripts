describe('Integration Tests', () => {
  // TODO: Complete the integration test to check if the quiz starts correctly
  it('Should show the start button on initial page load and successfully start the quiz', () => {
    cy.visit('/');

    


  });




  // TODO: Complete the integration test to mock a user visiting the site and completing the quiz
  it('Should display the correct questions and show the score at the end', () => {

    // Load the fixture
    cy.fixture('questions.json').then((mockQuestions) => {

      // Intercept the API call and return mockQuestions
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: mockQuestions,
      }).as('getQuestions');

      // Visit the page
      cy.visit('/');
      cy.get('button').contains('Start Quiz').should('be.visible')

      // start the quiz 
    cy.get('button').contains('Start Quiz').click()


      // answer some questions - right now there are 2
      cy.get('button').contains('2').should('be.visible').click()
      cy.get('button').contains('4').should('be.visible').click()
      // cy.get('button').contains('1').should('be.visible').click()
      // cy.get('button').contains('1').should('be.visible').click()

      // check if the score is correct  
      // cy.get('textarea').contains('/', '2')

      // take a new quiz
      cy.get('button').contains('Take New Quiz').click();


    });
  });
});