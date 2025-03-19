//your JS code here. If required.
describe('Testimonial Section', () => {
  it('should contain testimonials with the correct text and author', () => {
    cy.visit('path/to/your/index.html'); // replace with the path to your HTML file

    // Check the first testimonial
    cy.get('.testimonial').eq(0).within(() => {
      cy.get('.testimonial-text').should('have.text', '"This product has completely changed the way I work. It’s intuitive, easy to use, and has saved me so much time!"');
      cy.get('.author').should('have.text', '- John Doe');
    });

    // Check the second testimonial
    cy.get('.testimonial').eq(1).within(() => {
      cy.get('.testimonial-text').should('have.text', '"An amazing experience! The customer support was outstanding and the product quality is top-notch. Highly recommend!"');
      cy.get('.author').should('have.text', '- Jane Smith');
    });
  });
});
