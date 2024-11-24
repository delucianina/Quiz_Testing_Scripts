import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../src/components/Quiz';

describe('<Quiz />', () => {
  it('should display questions and handle answers correctly', () => {
    // Intercept the API call and return mockQuestions
    cy.fixture('questions.json').then((mockQuestions) => {
      // Intercept the API call and return mockQuestions
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: mockQuestions,
      }).as('getQuestions');

      // Mount the Quiz component
      mount(<Quiz />);

      // Start the quiz
      cy.get('button').contains('Start Quiz').click();

      // Wait for the API call to complete
      cy.wait('@getQuestions');



      // TODO: Complete the test code to answer both mock questions and ensure the score is correct at the end of the quiz

        // Answer the first question
        cy.get('button').contains('2').click();
  
        // Answer the second question
        cy.get('button').contains('3').click();
  
        // Check the final score
        cy.get('div').contains('2');

        // take a new quiz 
        cy.get('button').contains('Take New Quiz').click();

    });
  });
});