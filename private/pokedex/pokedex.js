const pokedex = require('./pokedex.json').map((pokemon)=>{
    return {name:pokemon.name.english
            ,type:pokemon.type
            ,abilities:[pokemon.profile.ability[0],pokemon.profile.ability[1]]
            ,bigImage:pokemon.image.hires
            ,mediumImage:pokemon.image.thumbnail
            ,smallImage:pokemon.image.sprite
            ,species:pokemon.species.replace('Pokémon','').trim()}
});
module.exports = pokedex;