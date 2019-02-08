import { combineReducers } from 'redux';

// Reducers
import pokemonListReducer from '#pages/pokemon-list/store/reducers';

const rootReducer = combineReducers({
  pokemonListReducer,
});

export default (state, action) => rootReducer(state, action);
