import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from '../actions/types';

const initialState = {
  pokemons: [],
  success: false,
};

const pokemonListReducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        success: false,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        success: true,
        pokemons: state.pokemons.concat(response.data.results),
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        success: false,
        error,
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
