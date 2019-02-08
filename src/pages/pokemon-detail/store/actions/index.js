import {
  GET_POKEMON_DETAIL_REQUEST,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILURE,
} from './types';

export const getPokemonDetail = index => ({
  type: GET_POKEMON_DETAIL_REQUEST,
  index,
});

export const getPokemonDetailSuccess = response => ({
  type: GET_POKEMON_DETAIL_SUCCESS,
  response,
});

export const getPokemonDetailFailure = error => ({
  type: GET_POKEMON_DETAIL_FAILURE,
  error,
});
