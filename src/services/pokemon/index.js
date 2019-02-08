import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemons = (offset = 0) => (
  axios.get(`${baseUrl}/pokemon?limit=30&offset=${offset}`)
);
