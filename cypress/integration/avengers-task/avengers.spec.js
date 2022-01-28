/// <reference types="cypress" />

describe('checking `the movie database` web-site`', () => {
  const link = 'https://skempin.github.io/reactjs-tmdb-app/'
  beforeEach(() => {
    cy.visit(link)
  })

 it('logo and url are correct', () => {
    cy.url().should('include', 'reactjs-tmdb-app/')
    cy.get('.logo')
      .should('have.attr', 'alt', 'The Movie Database')
      .should('have.attr', 'src', './images/tmdb.svg')
  })

  it('can type in search bar', () => {
    const newSearchValue = 'Arrival'
    cy.get('#q').type(`${newSearchValue}{enter}`)
    cy.get('.tt-suggestions strong')
      .should('have.length', 5)
      .should('contain', newSearchValue)
    const newSearchResults = ['The ', 'The Second ']
    newSearchResults.forEach( (searchResults) => {
      cy.get('.tt-suggestions p')
        .should('contain', searchResults)
        .children()
        .should('contain', newSearchValue)
    })
  })

  it('can select search result', () => {
    const newSearchValue = 'The Arrival'
    cy.get('#q').type(`${newSearchValue}{enter}`)
    cy.get('.tt-suggestions p')
      .eq(4)
      .click()
    //unstable search result (can be one of 3)
    const taglineOne = 'Mommy!'
    const taglineTwo = 'Your destination is in your dream.'
    const taglineTree = 'Mankind was born on Earth. It was never meant to die here.'
    const taglinesArray = [taglineOne, taglineTwo, taglineTree]
    cy.get('.tagline').invoke('text').then(text =>
      expect(text).to.be.oneOf(taglinesArray)
    )
  })

  it('can change response', () => {
    const theAvengersMovieInfo = 'https://api.themoviedb.org/3/movie/24428?&api_key=cfe422613b250f702980a3bbf9e90716'
    const newVoteAverage = '101.1'
    cy.intercept(theAvengersMovieInfo, (req) => {
      req.reply(res => {
        res.body.vote_average = newVoteAverage
      })
    })
    const newSearchValue = 'The Avengers'
    cy.get('#q').type(`${newSearchValue}{enter}`)
    cy.get('.tt-suggestions p')
      .eq(0)
      .click()
    cy.get(':nth-child(4) > .meta-data').should('contain', newVoteAverage)

  })

})