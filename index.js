const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const port = 3000;
const indexHTML = __dirname+'/public/html files/index.html';
const pokedex = require('./private/pokedex/pokedex.js');
const pokedexPages = require('./private/pokedex/pokedexPages.js');

app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(indexHTML)
})
app.get('/home',function(req,res){
    res.sendFile(indexHTML)
})
app.get('/pokedex',function (req,res) {
    const page = req.query['pg'];
    res.sendFile(indexHTML);
})
app.get('/pokedex/:pg',function (req,res) {
    try {
        const page = parseInt(req.params.pg)-1;
        let pageI = page-3;
        let pageF = page+4;
        //console.log(pokedexPages.length);
        while (!pokedexPages[pageF]) {
            pageF--;
        }
        res.json({pageI:pageI,array:pokedexPages[page],pageF:pageF});
    } catch (error) {
        res.sendStatus(500)
    }
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