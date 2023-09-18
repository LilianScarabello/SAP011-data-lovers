export function filtrarResultados(pokemons, type) {
  const pokemonsFiltrados = pokemons.filter(pokemon => (pokemon.type.includes(type)));
  return pokemonsFiltrados;
}

export function resultadoPesquisa(pokemons, name) {
  const sugestaoResultado = pokemons.filter(pokemon => (pokemon.name.includes(name.toLowerCase())));
  return sugestaoResultado;
}

export function ordenacao(pokemon,ordenarAZ) {
  pokemon.sort((a, b) => a.name.localeCompare(b.name));
  if (ordenarAZ.value === "A - Z") {
    return pokemon;
  } else {
    return pokemon.reverse();
  }
}
