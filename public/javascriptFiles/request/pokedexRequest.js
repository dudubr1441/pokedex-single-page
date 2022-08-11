import {ajax} from '/javascriptFiles/request/core/xmlRequest.js';
import { Component } from '/javascriptFiles/components/components.js';
import {params} from '/javascriptFiles/request/core/params.js';
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
const param = params();
export const config = {
    method:'get',
    url:`/pokedex/${param.pg ? parseInt(param.pg) : 1}`,
    async:false,
    success(json){
        console.log(`/pokedex/${param.pg}`);
        const pokemons = JSON.parse(json);
        document.querySelector('#pokedexList').innerHTML = "";
        pokemons.forEach((pokemon)=>{
            const imagePokemon = Component.createImage(pokemon.mediumImage,110,110);
            imagePokemon.AddClass('ImagePokemonPokedex');
            const NamePokemon = new Component();
            NamePokemon.AddClass('boxNamePokemonPokedex');
            NamePokemon.SetText(pokemon.name);
            const pokemonComponent = new Component();
            pokemonComponent.AddStyle('background-color',colorPokemon(pokemon.type[0].toLowerCase()));
            pokemonComponent.AddClass('pokemonPokedex');
            pokemonComponent.appendChild(imagePokemon.Element);
            pokemonComponent.appendChild(NamePokemon.Element)
            document.querySelector('#pokedexList').appendChild(pokemonComponent.Element);
        })
        console.log(pokemons);
    },
    error(status){
        alert('error in server: '+status);
    }
}