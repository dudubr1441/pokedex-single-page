const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const port = 3000;
const pokedex = require('./pokedex.json')

app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/html files/index.html')
})

app.get('/allPokemons',function(req,res){
    res.json(pokedex);
})

app.listen(port,() =>{
    console.log('server on');
})