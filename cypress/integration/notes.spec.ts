describe('Notes', function () {
    beforeEach(function () {
        cy.visit('http://localhost:8000')
    })

    it('front page can be opened', () => {
        cy.contains('Add new note');
    });

    const testString = 'testiteksti';

    it('note can be added', () => {
        cy.request('DELETE', 'http://localhost:8000/')
        cy.get('#new-note').type(testString);
        cy.get('#add-button').click();
        cy.contains(testString);
    });

    it('note can be deleted', () => {
        cy.get(`#delete-${testString}`).click();
        cy.contains(testString).should('not.exist')
    });
});
