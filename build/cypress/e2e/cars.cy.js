describe('Cars', () => {
  it('Should be able register 3 cars', () => {
    // expect(2).to.equal(2);
    cy.visit('http://estacionamento.test'); 

    const form = 'form';

    for (let i = 0; i < 3; i++) {
      cy.get(`${form} input[name="model"]`)
      .type('Tesla Cars');

      cy.get(`${form} input[name="board"]`)
        .type('A2S-K8N');

      cy.get(`${form} button[type="submit"]`)
        .click();
    }

    cy.get('#cars table tbody tr')
      .its('length')
      .then((length) => {
        expect(length).to.equal(3)
      });
  });
});