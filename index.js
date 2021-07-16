const Pokedex = require('./pokedex.js');
const PokeService = require('./pokeService.js');

var pokeService = new PokeService();
var pokedex = new Pokedex(Pokeservice);

pokedex.getPokemonAbilitiesByPokemonID(1, (value) => console.log(value));