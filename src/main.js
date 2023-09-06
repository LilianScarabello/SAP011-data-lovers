import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data);


for (let i = 0; i < data.pokemon.length; i++) {
  const template = `
  <figure>
    <img src="${data.pokemon[i].img}"> 
    <p>
       Num:${data.pokemon[i].num}
       Name:${data.pokemon[i].name}
       Type:${data.pokemon[i].type}
       About:${data.pokemon[i].about}
    </p> 
  </figure>`;
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML += template;
}


