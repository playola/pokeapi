import {
  GET_POKEMON_DETAIL_REQUEST,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILURE,
} from '../actions/types';

const initialState = {
  pokemonDetail: {},
  success: false,
};

const pokemonDetailReducer = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case GET_POKEMON_DETAIL_REQUEST:
      return {
        ...state,
        success: false,
      };
    case GET_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        success: true,
        pokemonDetail: response.data,
      };
    case GET_POKEMON_DETAIL_FAILURE:
      return {
        ...state,
        success: false,
        error,
      };
    default:
      return state;
  }
};

export default pokemonDetailReducer;
