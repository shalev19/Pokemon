async function main(){
  const pok_id = await fetch(`/api/pokemons/id`).then(res => res.json());  //get the pokemon id.
  const data = await fetch(`/api/pokemons/`+pok_id.id).then(res => res.json()); //get the pokemon with the given id.

  const container = document.querySelector(".container");

  const idAndNameContainer = document.createElement("div");
  idAndNameContainer.classList.add("id-and-name-container");

  const id = document.createElement("span");
  id.innerHTML = "#" + data.id;
  id.classList.add("id-number");
  idAndNameContainer.appendChild(id);

  const name = document.createElement("span");
  name.innerHTML = data.name;
  name.classList.add("name");
  idAndNameContainer.appendChild(name);

  container.appendChild(idAndNameContainer);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `/assets/pokemons/${data.id}.png`;
  img.classList.add("img");
  imgContainer.appendChild(img);

  container.appendChild(imgContainer);

  const typesContainer = document.createElement("div");
  typesContainer.classList.add("types-container");
  for (let typeName of data.type) {
    const type = document.createElement("p");
    type.classList.add("type");
    type.innerHTML = typeName;
    typesContainer.appendChild(type);
  }
  container.appendChild(typesContainer);

  const hp = document.querySelector("#hp");
  hp.innerHTML = data.base.HP;

  const attack = document.querySelector("#attack");
  attack.innerHTML = data.base.Attack;

  const defense = document.querySelector("#defense");
  defense.innerHTML = data.base.Defense;

  const spattack = document.querySelector("#spattack");
  spattack.innerHTML = data.base["Sp. Attack"];

  const spdefense = document.querySelector("#spdefense");
  spdefense.innerHTML = data.base["Sp. Defense"];

  const speed = document.querySelector("#speed");
  speed.innerHTML = data.base.Speed;
}


main();