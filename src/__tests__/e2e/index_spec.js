const DELAY = 1500;

describe('Home Page', () => {
  beforeEach(() => {
    console.log('beforeEach');
    cy.visit('/');
    cy.injectAxe();
  });

  it('AC1-When a user first lands on the page, they are presented with a search input field and a search button.', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.visible');
    cy.get('[data-testid="button-search"]')
      .eq(0)
      .should('be.visible');
    cy.wait(DELAY);
  });
  it('AC2-When a user first lands on the page, the search input field has focus.', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.focus');
    cy.wait(DELAY);
  });
  it('AC3-A user may type any text into the search input field then click on the search button to initiate a search.', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.visible')
      .type('Jour', { delay: 50 })
      .should('have.value', 'Jour');
    cy.wait(DELAY);
    cy.get('[data-testid="button-search"]').click();
    cy.wait(DELAY);
  });
  it('AC4-A user may type any text into the search input field then press the enter key to initiate a search.', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.visible')
      .type('God', { delay: 50 })
      .should('have.value', 'God');
    cy.wait(DELAY);
    cy.get('[data-testid="input-search"]').type('{enter}');
    cy.wait(DELAY);
  });
  it('AC5-The search input field and the search button are always present on screen during all interactions with the application.', () => {});
  it('AC6-Upon initiating a search, the user is presented with the search results.', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.visible')
      .type('Jour', { delay: 50 })
      .should('have.value', 'Jour');
    cy.wait(DELAY);
    cy.get('[data-testid="button-search"]').click();
    cy.wait(DELAY);
    cy.get('[data-testid="card-title"]')
      .eq(0)
      .should('be.visible');
    cy.wait(DELAY);
  });
  it('AC7-AC8-A9', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.visible')
      .type('Godf', { delay: 50 })
      .should('have.value', 'Godf');
    cy.wait(DELAY);
    cy.get('[data-testid="button-search"]').click();
    cy.wait(DELAY);
    cy.get('[data-testid="card-detail-link"]')
      .eq(0)
      .click();
    cy.wait(DELAY);
    cy.get('[data-testid="cast-list-index"]')
      .eq(0)
      .click();
    cy.wait(DELAY);
    cy.get('[data-testid="goto-movie-link"]')
      .eq(0)
      .click();
    cy.wait(DELAY);
  });
  describe('AC10-Near the search input field and the search button, add an interface element to allow the user to filter the search results for only actors, only movies, only tv shows, or all.', () => {
    it('AC10-Search All.', () => {
      cy.get('[data-testid="input-search"]')
        .eq(0)
        .should('be.visible')
        .type('As', { delay: 50 })
        .should('have.value', 'As');
      cy.wait(DELAY);
      cy.get('[data-testid="button-search"]').click();
      cy.wait(DELAY);
    });
    it('AC10-Search Only Movie.', () => {
      cy.get('[data-testid="input-search"]')
        .eq(0)
        .should('be.visible')
        .type('As', { delay: 50 })
        .should('have.value', 'As');
      cy.wait(DELAY);
      cy.get('[data-testid="select-media-type"]')
        .eq(0)
        .should('be.visible')
        .select('movie', { delay: 50 })
        .should('have.value', 'movie');
      cy.wait(DELAY);
      cy.get('[data-testid="button-search"]').click();
      cy.wait(DELAY);
    });
    it('AC10-Search Only TV Shows', () => {
      cy.get('[data-testid="input-search"]')
        .eq(0)
        .should('be.visible')
        .type('As', { delay: 50 })
        .should('have.value', 'As');
      cy.wait(DELAY);
      cy.get('[data-testid="select-media-type"]')
        .eq(0)
        .should('be.visible')
        .select('tv', { delay: 50 })
        .should('have.value', 'tv');
      cy.wait(DELAY);
      cy.get('[data-testid="button-search"]').click();
      cy.wait(DELAY);
    });
    it('AC10-Search Only Actors', () => {
      cy.get('[data-testid="input-search"]')
        .eq(0)
        .should('be.visible')
        .type('John', { delay: 50 })
        .should('have.value', 'John');
      cy.wait(DELAY);
      cy.get('[data-testid="select-media-type"]')
        .eq(0)
        .should('be.visible')
        .select('person', { delay: 50 })
        .should('have.value', 'person');
      cy.wait(DELAY);
      cy.get('[data-testid="button-search"]').click();
      cy.wait(DELAY);
    });
  });
  it('AC11-AC12-When a user is typing text into the search input field, after at least 5 characters have been entered, a list of clickable search suggestions is presented to the user.', () => {
    cy.get('[data-testid="input-search"]')
      .eq(0)
      .should('be.visible')
      .type('Godfa', { delay: 50 })
      .should('have.value', 'Godfa');
    cy.wait(DELAY);
    cy.get('[data-testid="input-search-suggestion"]')
      .eq(0)
      .click();
    cy.wait(DELAY);
  });
});
