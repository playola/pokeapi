import {
  put, takeLatest, fork, all,
} from 'redux-saga/effects';
import { GET_POKEMONS_REQUEST } from '../actions/types';
import {
  getPokemonsSuccess,
  getPokemonsFailure,
} from '../actions';
import { getPokemons as getPokemonsService } from '../../../../services/pokemon';

export function* getPokemons() {
  try {
    const response = yield getPokemonsService();
    yield put(getPokemonsSuccess(response));
  } catch (err) {
    yield put(getPokemonsFailure(err));
  }
}

export function* watchGetPokemons() {
  yield takeLatest(GET_POKEMONS_REQUEST, getPokemons);
}

export default function* root() {
  yield all([
    fork(watchGetPokemons),
  ]);
}
