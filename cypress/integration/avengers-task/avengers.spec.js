/// <reference types="cypress" />

describe('checking `the movie database` web-site`', () => {
  it('logo and url are correct', () => {
    cy.visit('/');
    cy.url().should('include', 'reactjs-tmdb-app/');
    cy.get('.logo')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'alt', 'The Movie Database')
      .should('have.attr', 'src', './images/tmdb.svg');
  });

  it('can type in search bar', () => {
    const newSearchValue = 'Arrival';
    cy.intercept({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?*',
    }).as('getSearchMovies');

    cy.searchMovies(newSearchValue);

    cy.wait('@getSearchMovies');

    cy.get('.tt-suggestions p').should('have.length', 5);
    // .should('contain', newSearchValue);

    // const newSearchResults = ['The ', 'The Second '];

    // newSearchResults.forEach((searchResults) => {
    //   cy.get('.tt-suggestions p')
    //     .should('contain', searchResults)
    //     // .children()
    //     .should('contain', newSearchValue);
    // });

    cy.get('.tt-suggestions p')
      .then(($items) => Array.from($items).map((i) => i.innerText))
      .should((lebels) => {
        expect(lebels).to.include('Arrival');
        expect(lebels).to.include('The Arrival');
        expect(lebels).to.include('The Second Arrival');
      });
  });

  it('can select search result', () => {
    const newSearchValue = 'Arrival';
    cy.searchMovies(newSearchValue);
    cy.get('.tt-suggestions p').eq(0).click();
    //unstable search result (can be one of 3)
    const expectedMoto = 'Why are they here?';

    cy.get('h1').should('have.text', newSearchValue);
    cy.get('.tagline').should('have.text', expectedMoto);
    // .invoke('text')
    // .then((text) => expect(text).to.be.oneOf(taglinesArray));
  });

  it('can select search result', () => {
    const newSearchValue = 'The Arrival';

    cy.intercept({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?*',
    }).as('getSearchMovies');

    cy.searchMovies(newSearchValue);

    cy.wait('@getSearchMovies');

    cy.get('.tt-suggestions p').eq(3).click();
    const taglineOne = 'The battle for Earth has begun';

    cy.get('.tagline').should('have.text', taglineOne);
  });

  it('can change response', () => {
    const theAvengersMovieInfo = 'https://api.themoviedb.org/3/movie/*';

    const newVoteAverage = '101.1';

    cy.intercept(theAvengersMovieInfo, (req) => {
      req.reply((res) => {
        res.body.vote_average = newVoteAverage;
      });
    }).as('getMovie');

    const newSearchValue = 'The Avengers';

    cy.searchMovies(newSearchValue);
    cy.get('.tt-suggestions p').eq(0).click();

    cy.wait('@getMovie').then((xhr) => console.log(xhr));

    cy.get('div:contains("Aver") > .meta-data').should(
      'contain',
      newVoteAverage
    );
  });
});
