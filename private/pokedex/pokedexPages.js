const pokedex = require('./pokedex');
const GeneratesPagesContent = require('../GeneratorPagesContent');
const pokedexPages = GeneratesPagesContent(pokedex,8);
module.exports = pokedexPages;