import {Component} from '/javascriptFiles/components/components.js';
import {config as pokemonFunction} from '/javascriptFiles/request/pokedexRequest.js';
import {params} from '/javascriptFiles/request/core/params.js';
import {managerContent as manager} from '/javascriptFiles/components/manager.js';

//button BackPage
const buttonBackPage = Component.createImage('/images files/backPage.svg',25,25);
buttonBackPage.AddAtributte('id','backpage');
buttonBackPage.addEvent('click',function(){
    manager.backPage();
});
// title pokemon
const TitlePokedex = Component.createText('pokedex');
TitlePokedex.AddAtributte('id', 'titlePokedex');

// pokemon list
const DivPokemonList = Component.createDiv('pokedexList');
// const pokemonPokedex = Component.createDiv();
// pokemonPokedex.AddClass('pokemonPokedex');

// pokemon Pages
const divPages = Component.createDiv('pagesListPokedex');

//append childrens
const DivPokedex = Component.createDiv('screen');
DivPokedex.AddClass('pokedex');
DivPokedex.appendChild(TitlePokedex.Element);
DivPokedex.appendChild(DivPokemonList.Element);
DivPokedex.appendChild(divPages.Element);
DivPokedex.appendChild(buttonBackPage.Element);
export function pokedexFunction(pgOptional){
    if(!pgOptional){
    let param = params();
    const pg = param.pg ? param.pg : param.pg = 1;
    return {name:pokedex,tag:DivPokedex.Element,url:`/pokedex?pg=${pg}`,config:pokemonFunction}
    }else{
        return {name:pokedex,tag:DivPokedex.Element,url:`/pokedex?pg=${pgOptional}`,config:pokemonFunction}
    }
}
export var pokedex = pokedexFunction();