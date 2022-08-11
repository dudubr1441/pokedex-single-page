import {Component} from '/javascriptFiles/components/components.js';
import {managerContent} from '/javascriptFiles/components/manager.js';
import { screens } from '/javascriptFiles/screens/screens.js';
import {params} from '/javascriptFiles/request/core/params.js';
const home = new Component('div');

// title image
const pathTitlePokemon = '/images files/start/pokemonTitle.png';
const ImagetitlePokemon = Component.createImage(pathTitlePokemon,280,131);
const divTitlePokemon = Component.createDiv();
divTitlePokemon.AddAtributte('id','titleImagePokemon');
divTitlePokemon.appendChild(ImagetitlePokemon.Element);

//div start
const groupStart = Component.createDiv();
groupStart.AddClass('contentDivCenterHorizontal');
groupStart.AddAtributte('id','StartDiv');
const textStart = Component.createText('Press Start');
textStart.AddClass('TextPokemon');
textStart.AddAtributte('id','startText');
const pathImageStart = '/images files/start/pokemonButtonStart.png';
const imageStart = Component.createImage(pathImageStart,80,80);
imageStart.AddAtributte('id','startImage');
imageStart.addEvent('click',function(){
    var param = params();
    managerContent.nextPage(screens.pokedex);
});

//append elements
groupStart.appendChild(textStart.Element);
groupStart.appendChild(imageStart.Element);

home.appendChild(divTitlePokemon.Element);
home.appendChild(groupStart.Element);
home.AddAtributte('id','screen');
home.AddClass('start');
export const homeStart = {name:'home',tag:home.Element,url:'/home'};