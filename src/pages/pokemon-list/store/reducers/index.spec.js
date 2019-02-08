import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from '../actions/types';
import pokemonsReducer from './index';

const initialState = {
  pokemons: [],
  success: false,
};

const pokemonsResponseMock = {
  data: {
    results: [
      {
        name: 'foo',
        url: 'foo url',
      },
      {
        name: 'boo',
        url: 'boo url',
      },
    ],
  },
};

describe('pokemonsReducer', () => {
  it('should return initial state when action is undefined', () => {
    expect(pokemonsReducer(initialState, 'default')).toEqual(initialState);
  });

  it('should return correct state when GET_POKEMONS_REQUEST action is called', () => {
    const action = {
      type: GET_POKEMONS_REQUEST,
    };
    expect(pokemonsReducer(initialState, action)).toEqual({
      ...initialState,
      success: false,
    });
  });

  it('should return correct state when GET_POKEMONS_SUCCESS action is called', () => {
    const action = {
      type: GET_POKEMONS_SUCCESS,
      response: pokemonsResponseMock,
    };

    expect(pokemonsReducer(initialState, action)).toEqual({
      ...initialState,
      success: true,
      pokemons: action.response.data.results,
    });
  });

  it('should return correct state when GET_POKEMONS_FAILURE action is called', () => {
    const action = {
      type: GET_POKEMONS_FAILURE,
      error: {
        code: 400,
      },
    };

    expect(pokemonsReducer(initialState, action)).toEqual({
      ...initialState,
      success: false,
      error: action.error,
    });
  });
});
