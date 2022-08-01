const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const port = 3000;
const pokedex = require('./pokedex.json').map((pokemon)=>{
    return {name:pokemon.name.english
            ,type:pokemon.type
            ,abilities:pokemon.profile.ability
            ,bigImage:pokemon.image.hires
            ,mediumImage:pokemon.image.thumbnail
            ,smallImage:pokemon.image.sprite
            ,species:pokemon.species.replace('Pokémon','').trim()}
});
app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/html files/index.html')
})

app.get('/allPokemons',function(req,res){
    res.json(pokedex);
})
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(0);
  });
app.listen(port,() =>{
    console.log('server on');
})