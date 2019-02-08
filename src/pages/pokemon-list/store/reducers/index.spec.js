import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from '../actions/types';
import pokemonListReducer from './index';

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

describe('pokemonListReducer', () => {
  it('should return initial state when action is undefined', () => {
    expect(pokemonListReducer(initialState, 'default')).toEqual(initialState);
  });

  it('should return correct state when GET_POKEMONS_REQUEST action is called', () => {
    const action = {
      type: GET_POKEMONS_REQUEST,
    };
    expect(pokemonListReducer(initialState, action)).toEqual({
      ...initialState,
      success: false,
    });
  });

  it('should return correct state when GET_POKEMONS_SUCCESS action is called', () => {
    const action = {
      type: GET_POKEMONS_SUCCESS,
      response: pokemonsResponseMock,
    };

    expect(pokemonListReducer(initialState, action)).toEqual({
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

    expect(pokemonListReducer(initialState, action)).toEqual({
      ...initialState,
      success: false,
      error: action.error,
    });
  });
});
