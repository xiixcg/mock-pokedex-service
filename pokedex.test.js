const Pokedex = require('./pokedex.js');

describe('Pokedex tests', () => {
  it('is a function', () => {
    expect(typeof Pokedex).toBe('function');
  })

  it('it prints pokemon abilities', () => {
    //Arrange
    const ditto = {
      name: "Ditto",
      abilities: [{ ability: { name: 'limber', url: 'https://' }, is_hidden: false, slot: 3 }]
    }


    var mockResponse = (id) => Promise.resolve({
      json: () => Promise.resolve(ditto),
    });

    jest.mock('./pokeService', () => {
      getPokemonById: jest.fn(mockResponse)
    })

    const mockPokeService = require('./pokeService');

    var myPokedex = new Pokedex(mockPokeService);

    //Act

    let actual = myPokedex.getPokemonAbilitiesByPokemonID('ditto', () => {

    })

    //Assert
    expect(expected).toBe(actual);

  })
})