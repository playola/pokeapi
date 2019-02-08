import { combineReducers } from 'redux';

// Reducers
import pokemonListReducer from '#pages/pokemon-list/store/reducers';
import pokemonDetailReducer from '#pages/pokemon-detail/store/reducers';

const rootReducer = combineReducers({
  pokemonListReducer,
  pokemonDetailReducer,
});

export default (state, action) => rootReducer(state, action);
