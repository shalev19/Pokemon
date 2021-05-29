const express = require('express');
const app = express();
const path = require('path');
const pokemon_data = require('./assets/pokemons.json');
const fs = require("fs");
var id;


app.use("/assets",express.static("assets"))

app.get("/api/pokemons", (req,res)=>{  //send all the pokemos json.
  const result = pokemon_data.map((pokemon)=>{
    return pokemon;
});
res.send(result);

});

app.get("/pokemons", (req,res)=>{
  res.sendFile(path.resolve("./pokemons.html"))

});

app.get("/api/pokemons/id", (req,res)=>{  //send the pokemon id.
  res.send(id);
});

app.get("/pokemons/:id", (req,res)=>{
   id = req.params;
  if(!id){ //check if the id is legal.
    return res.sendStatus(400);
  }
  if(isNaN(id.id)){
    return res.sendStatus(401);
  }
  const found = pokemon_data.find((pokemon)=>(pokemon.id == id.id));

  if(!found){
    return res.sendStatus(404);
  }
    res.sendFile(path.resolve("./pokemon.html"))
});

app.get("/api/pokemons/:id", (req,res)=>{  //get the pokemon by his id.
  const found = pokemon_data.find((pokemon)=>(pokemon.id == id.id));

  if (found.hasOwnProperty("count")) found.count++;
  else found.count = 1;
  res.send(found);
});

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("./index.html"))
});


  app.get("/assets/pokemons/:id.png", (req, res) => {  //get pokemon image.
    const { id } = req.params;
    const imgsFolder = "./assets/images/";
    let foundImg;
    fs.readdirSync(imgsFolder).forEach((file) => {
      if (parseInt(file.split(".")[0]) == parseInt(id)) {
        foundImg = file;
      }
    });
    res.sendFile(path.resolve(imgsFolder + `${foundImg}`));
  });

app.listen(3000);