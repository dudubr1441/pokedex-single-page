const pokedex = require('./pokedex');
const GeneratesPagesContent = require('../GeneratorPagesContent');
const pokedexPages = GeneratesPagesContent(pokedex,7);
module.exports = pokedexPages;