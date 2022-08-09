import { Component } from '/javascriptFiles/components/components.js';
import {config as pokemonFunction} from '/javascriptFiles/request/pokedexRequest.js';
import {params} from '/javascriptFiles/request/core/params.js';
var param = params();
const pg = param.pg ? param.pg : param.pg = 1;

// title pokemon
const TitlePokedex = Component.createText('pokedex');
TitlePokedex.AddAtributte('id', 'titlePokedex');

// pokemon list
const DivPokemonList = Component.createDiv('pokedexList');
// const pokemonPokedex = Component.createDiv();
// pokemonPokedex.AddClass('pokemonPokedex');

//append childrens
const DivPokedex = Component.createDiv('screen');
DivPokedex.AddClass('pokedex');
DivPokedex.appendChild(TitlePokedex.Element);
DivPokedex.appendChild(DivPokemonList.Element);
export const pokedex = {name:'pokedex',tag:DivPokedex.Element,url:`/pokedex?pg=${pg}`,config:pokemonFunction}; 