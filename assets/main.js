

async function main(){
    const data = await fetch('/api/pokemon').then(res=>res.json());
    const list = document.querySelector("#pokemons-list");
    const items = [];


    for(const pok of data){
        const li= document.createElement("li");
        li.textContent = 'id '+pok.id +'name ' + pok.name;
        items.push(li);
    }
    list.append(...items);
};
main();