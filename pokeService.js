const fetch = require('node-fetch');

class PokeService {
  constructor() {

  }
  //returns a promise that has json in it
  getPokemonById(pokemonId) {
    console.log('In PokeService');
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .catch((err) => {
        console.log('Error: ' + err);
      })
  }
}

module.exports = Pokeservice;