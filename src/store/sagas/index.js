import { all, fork } from 'redux-saga/effects';

// Sagas
import pokemonListSaga from '#pages/pokemon-list/store/sagas';

export default function* root() {
  yield all([
    fork(pokemonListSaga),
  ]);
}
