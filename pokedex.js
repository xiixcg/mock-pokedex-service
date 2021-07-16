const PokeService = require('./pokeService.js');

class Pokedex = () => {
  constructor(pokeService) {
    this.pokeService = pokeService;
  }

  getPokemonAbilitiesByPokemonID(Id, responseCallBack){
    this.pokeservice.getPokemonById(Id)
      .then(response => response.json())
      .then((pokemon) => {
        var abilities = pokemon.abilities;);
    return responseCallBack(abilities);
  }
}
}

module.exports = Pokedex;