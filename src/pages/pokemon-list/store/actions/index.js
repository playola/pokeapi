import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from './types';

export const getPokemons = () => ({
  type: GET_POKEMONS_REQUEST,
});

export const getPokemonsSuccess = response => ({
  type: GET_POKEMONS_SUCCESS,
  response,
});

export const getPokemonsFailure = error => ({
  type: GET_POKEMONS_FAILURE,
  error,
});
