import data from './data/pokemon/pokemon.js';
import { filtrarResultados, resultadoPesquisa, ordenacao } from './data.js';
import allPokemons from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data);


for (let i = 0; i < data.pokemon.length; i++) {
  const template = `
  <figure>
    <img src="${data.pokemon[i].img}"> 
    <p>
       Num:${data.pokemon[i].num}<br>
       Name:${data.pokemon[i].name}<br>
       Type:${data.pokemon[i].type}<br>
       About:${data.pokemon[i].about}<br>
    </p> 
  </figure>`;
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML += template;
}

const cardsType = document.getElementById("typePokemon");
cardsType.addEventListener("change", () => {
  const type = cardsType.value;
  console.log(type)
  const resultado = filtrarResultados(data.pokemon, type);
  console.log(resultado)
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML = "";
  for (let i = 0; i < resultado.length; i++) {
    const template = `
    <figure>
      <img src="${resultado[i].img}"> 
      <p>
         Num:${resultado[i].num}<br>
         Name:${resultado[i].name}<br>
         Type:${resultado[i].type}<br>
         About:${resultado[i].about}<br>
      </p> 
    </figure>`;
    cardContainer.innerHTML += template;
  }
})
const cardsName = document.querySelector(".search");
function buscarCard() {
  const name = cardsName.value;
  console.log(name)
  const resultadoPesq = resultadoPesquisa(data.pokemon, name);
  console.log(resultadoPesq)
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML = "";
  for (let i = 0; i < resultadoPesq.length; i++) {
    const template = `
    <figure>
      <img src="${resultadoPesq[i].img}"> 
      <p>
         Num:${resultadoPesq[i].num}<br>
         Name:${resultadoPesq[i].name}<br>
         Type:${resultadoPesq[i].type}<br>
         About:${resultadoPesq[i].about}<br>
      </p> 
    </figure>`;
    cardContainer.innerHTML += template;
  }
}
cardsName.addEventListener("input", buscarCard);

const ordenarAZ = document.querySelector("#nameSort");
ordenarAZ.addEventListener("click", function (e) {
  e.preventDefault();
  const newPokemon = allPokemons.pokemon;
  const alphaResults = ordenacao(newPokemon,ordenarAZ);
  const cardContainer = document.getElementById("cardsContainer");
  cardContainer.innerHTML = "";
  for (let i = 0; i < alphaResults.length; i++) {
    const template = `
  <figure>
    <img src="${alphaResults[i].img}"> 
    <p>
       Num:${alphaResults[i].num}<br>
       Name:${alphaResults[i].name}<br>
       Type:${alphaResults[i].type}<br>
       About:${alphaResults[i].about}<br>
    </p> 
  </figure>`;
    cardContainer.innerHTML += template;
  }
});