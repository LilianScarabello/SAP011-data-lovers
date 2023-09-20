import { filtrarResultados,resultadoPesquisa,ordenacao} from '../src/data.js';

const bulbasaur = {
  name: 'bulbasaur',
  type: [
    'grass',
    'poison'
  ],
}
const pikachu = {
  name: 'pikachu',
  type: ['electric']
}
const butterfree = {
  name: 'butterfree',
  type: ['bug',
    'flying']
}
const pokemons = [
  bulbasaur,
  pikachu,
  butterfree,
]


describe('agrupamento dos testes da função filtrar resultados', () => {
  it('is a function', () => {
    expect(typeof filtrarResultados).toBe('function');
  });

  it('deve retornar pokemons pelo tipo escolhido', () => {
    expect(filtrarResultados(pokemons, 'grass')).toStrictEqual([bulbasaur]);
  });
});


describe('agrupamento dos testes da função resultados de pesquisa', () => {
  it('is a function', () => {
    expect(typeof resultadoPesquisa).toBe('function');
  });

  it('deve retornar pokemons pelos caracteres digitados', () => {
    expect(resultadoPesquisa(pokemons, 'pikachu')).toStrictEqual([pikachu]);
  });
});


describe('agrupamento dos testes da função de ordenação por nome', () => {
  it('is a function', () => {
    expect(typeof ordenacao).toBe('function');
  });

  it('deve retornar pokemons pela seleção de a-z ou z-a', () => {
    expect (ordenacao(pokemons, "A - Z")).toStrictEqual([bulbasaur,butterfree,pikachu]);
  });

  it('deve retornar pokemons pela seleção de a-z ou z-a', () => {
    expect (ordenacao(pokemons, "Z - A")).toStrictEqual([pikachu,butterfree,bulbasaur]);
  });
});
