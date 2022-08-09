import {ajax} from '/javascriptFiles/request/core/xmlRequest.js';
import { Component } from '/javascriptFiles/components/components.js';
import {params} from '/javascriptFiles/request/core/params.js';
export var param = params();
const pg = param.pg ? parseInt(param.pg) : parseInt('1');
const CompomentsArrayPokemons = []
function colorPokemon(type) {
    const colorpadron = '#ffffff';
    switch (type) {
        case 'monster': return '#36F208'
            break;
        case 'grass': return '#548651'
            break;
        case 'fyre': return '#d41313'
            break;
        default: return color;
            break;
    }
}
const config = {
    method:'get',
    url:`/pokedex/${param.pg}`,
    async:false,
    success(json){
        const pokemons = JSON.parse(json);
        pokemons.foreach((pokemon)=>{
            const pokemonComponent = new Component();
        })
    },
    error(status){
        alert('error in server: '+status)
    }
}