import {
  getPokemonIndex,
  filterPokemonsByName,
  filterPokemonsById,
} from './index';

describe('Pokemon utils', () => {
  it('should get pokemon index from pokemon url', () => {
    const pokemonUrlMock = 'https://pokeapi.co/api/v2/pokemon/1/';
    expect(getPokemonIndex(pokemonUrlMock)).toEqual('1');
  });

  it('should get pokemon index from pokemon url when contains a 2', () => {
    const pokemonUrlMock = 'https://pokeapi.co/api/v2/pokemon/23/';
    expect(getPokemonIndex(pokemonUrlMock)).toEqual('23');
  });

  it('should filter pokemons by name', () => {
    const pokemonsArrMock = [{ name: 'hello world' }, { name: 'foo' }];
    expect(filterPokemonsByName(pokemonsArrMock, 'hello')).toEqual([{ name: 'hello world' }]);
  });

  it('should filter pokemons by id', () => {
    const pokemonsArrMock = [{ url: 'foo/v2/23' }, { url: 'foo/v2/11' }];
    expect(filterPokemonsById(pokemonsArrMock, '2')).toEqual([{ url: 'foo/v2/23' }]);
  });
});
