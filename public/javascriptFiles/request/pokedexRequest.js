import {ajax} from '/javascriptFiles/request/core/xmlRequest.js';
import { Component } from '/javascriptFiles/components/components.js';
import {params} from '/javascriptFiles/request/core/params.js';
var param = params();
const pg = param.pg ? parseInt(param.pg) : parseInt('1');
const CompomentsArrayPokemons = []
function colorPokemon(type) {
    const colorpadron = '#000000';
    //: #eea200
    switch (type.toString()) {
        case 'monster': return '#36F208';
            break;
        case 'grass': return '#548651';
            break;
        case 'poison': return '#a65ea6';
            break;
        case 'fire': return '#d41313';
            break;
        case 'water': return '#007dcd';
            break;
        case 'bug': return '#99a30b';
            break;
        case 'normal': return '#a9a293';
            break;
        case 'electric': return '#eea200';
            break;
        case 'ground': return '#b2a160';
            break;
        case 'fairy': return '#e7a5e2';
            break;
        case 'fighting': return '#60230e';
            break;
        case 'psychic': return '#e44a76';
            break;
        case 'rock': return '#ae9748';
            break;
        case 'ice': return '#7ddbf7';
            break;
        case 'dragon': return '#6857c0';
            break;
        case 'dark': return '#4b3b2b';
            break;
        case 'ghost': return '#575ba5';
            break;
        case 'steel': return '#9ea0af';
            break;
        default: return colorpadron;
            break;
    }
}
export const config = {
    method:'get',
    url:`/pokedex/${param.pg}`,
    async:false,
    success(json){
        const pokemons = JSON.parse(json);
        pokemons.forEach((pokemon)=>{
            let pokemonComponent = new Component();
            console.log(colorPokemon(pokemon.type[0].toLowerCase()));
            console.log(pokemon.type[0].toLowerCase());
            pokemonComponent.AddStyle('background-color',colorPokemon(pokemon.type[0].toLowerCase()));
            pokemonComponent.AddClass('pokemonPokedex');
            document.querySelector('#pokedexList').appendChild(pokemonComponent.Element);
        })
    },
    error(status){
        alert('error in server: '+status)
    }
}