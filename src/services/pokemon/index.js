import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemons = (offset = 0) => (
  axios.get(`${baseUrl}/pokemon?limit=30&offset=${offset}`)
);

export const getPokemonDetail = (index = 1) => (
  axios.get(`${baseUrl}/pokemon/${index}`)
);
