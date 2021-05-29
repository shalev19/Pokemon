async function main(){
  

  const data = await fetch('/api/pokemons').then(res=>res.json());

  const lis = document.querySelector("ul").querySelectorAll("li");
  let sortedData = data.filter((p) => p.hasOwnProperty("count")).sort((a, b) => b.count - a.count);
  let mostPopular = sortedData.slice(0, 3);

  


  for (let i = 0; i < mostPopular.length; i++) {
    const a = document.createElement("a");
    a.classList.add("clickable");

    const div = document.createElement("div");
    div.classList.add("container");

    const img = document.createElement("img");
    img.src = `/assets/pokemons/${mostPopular[i].id}.png`;
    img.classList.add("img");
    div.appendChild(img);

    const p = document.createElement("p");
    p.innerHTML = mostPopular[i].name;
    p.classList.add("name");
    div.appendChild(p);
    a.appendChild(div);
    a.href = `./pokemons/${mostPopular[i].id}`;
    lis[i].appendChild(a);
  }
}


main();