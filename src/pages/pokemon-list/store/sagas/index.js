import {
  put, takeLatest, fork, all,
} from 'redux-saga/effects';
import { getPokemons as getPokemonsService } from '#services/pokemon';
import { GET_POKEMONS_REQUEST } from '../actions/types';
import {
  getPokemonsSuccess,
  getPokemonsFailure,
} from '../actions';

export function* getPokemons(payload) {
  try {
    const response = yield getPokemonsService(payload.offset);
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
