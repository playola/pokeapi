import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from '../actions/types';

const initialState = {
  pokemons: [],
  loading: false,
  error: null,
};

const pokemonListReducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: state.pokemons.concat(response),
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
