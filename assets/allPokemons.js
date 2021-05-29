async function main(){
    const data = await fetch('/api/pokemons').then(res=>res.json());  //get the pokemons json.
    const ul = document.querySelector("ul");
  for (let i = 0; i < data.length; i++) {  //create li element for every pokemon.
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.classList.add("clickable");

    const div = document.createElement("div");
    div.classList.add("inner-container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const img = document.createElement("img");
    if(data[i].id < 10){
        img.src = `/assets/images/00${data[i].id}.png`;
    }
    else if( data[i].id < 100){
        img.src = `/assets/images/0${data[i].id}.png`;
    }
    else{
        img.src = `/assets/images/${data[i].id}.png`;
    }
    img.classList.add("img");
    imgContainer.appendChild(img);
    div.appendChild(imgContainer);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const idAndNameContainer = document.createElement("div");
    idAndNameContainer.classList.add("id-and-name-container");

    const id = document.createElement("p");
    id.innerHTML = "#" + data[i].id;
    id.classList.add("id-number");
    idAndNameContainer.appendChild(id);

    const name = document.createElement("p");
    name.innerHTML = data[i].name;
    name.classList.add("name");
    idAndNameContainer.appendChild(name);

    descriptionContainer.appendChild(idAndNameContainer);

    const typesContainer = document.createElement("div");
    typesContainer.classList.add("types-container");
    for (let typeName of data[i].type) {
      const type = document.createElement("p");
      type.classList.add("type");
      type.innerHTML = typeName;
      typesContainer.appendChild(type);
    }

    descriptionContainer.appendChild(typesContainer);

    div.appendChild(descriptionContainer);
    a.appendChild(div);
    a.href = `./pokemons/${data[i].id}`;
    li.appendChild(a);
    ul.appendChild(li);
  }
};
main();