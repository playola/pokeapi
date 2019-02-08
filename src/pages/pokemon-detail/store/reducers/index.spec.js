import {
  GET_POKEMON_DETAIL_REQUEST,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILURE,
} from '../actions/types';
import pokemonDetailReducer from './index';

const initialState = {
  pokemonDetail: {},
  success: false,
};

const pokemonDetailResponseMock = {
  data: {
    id: 0,
    name: 'foo',
    moves: [],
    types: [],
  },
};

describe('pokemonDetailReducer', () => {
  it('should return initial state when action is undefined', () => {
    expect(pokemonDetailReducer(initialState, 'default')).toEqual(initialState);
  });

  it('should return correct state when GET_POKEMON_DETAIL_REQUEST action is called', () => {
    const action = {
      type: GET_POKEMON_DETAIL_REQUEST,
    };
    expect(pokemonDetailReducer(initialState, action)).toEqual({
      ...initialState,
      success: false,
    });
  });

  it('should return correct state when GET_POKEMON_DETAIL_SUCCESS action is called', () => {
    const action = {
      type: GET_POKEMON_DETAIL_SUCCESS,
      response: pokemonDetailResponseMock,
    };

    expect(pokemonDetailReducer(initialState, action)).toEqual({
      ...initialState,
      success: true,
      pokemonDetail: action.response.data,
    });
  });

  it('should return correct state when GET_POKEMON_DETAIL_FAILURE action is called', () => {
    const action = {
      type: GET_POKEMON_DETAIL_FAILURE,
      error: {
        code: 400,
      },
    };

    expect(pokemonDetailReducer(initialState, action)).toEqual({
      ...initialState,
      success: false,
      error: action.error,
    });
  });
});
