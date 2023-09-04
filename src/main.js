import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data);

for (let i = 0; i < data.length; i++) {
  const template = `<img src="${data.pokemon[i].img}">`;
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML += template;
}


