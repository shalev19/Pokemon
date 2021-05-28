const express = require('express');
const app = express();
const path = require('path');
const pokemon_data = require('./assets/pokemons.json');
app.use("/assets",express.static("assets"))
app.get("/api/pokemon", (req,res)=>{
    const result = pokemon_data.map((pokemon)=>{
        return pokemon;
    });
    res.send(result);

});



app.get("/", (req,res)=>{
    res.sendFile(path.resolve("./index.html"))
});

app.listen(3000);