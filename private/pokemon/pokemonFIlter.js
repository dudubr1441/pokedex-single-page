const pokemons = require('../pokedex/pokedex.json');

function pokemon(name) {
    let pokemonResult;
    for (const pokemon of pokemons) {        
        if(pokemon.name.english.toLowerCase() == name.toLowerCase()){
            pokemonResult = pokemon;
            break;
        }
    }
    return pokemonResult;
}

module.exports = pokemon;