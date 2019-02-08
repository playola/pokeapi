import {
  put, takeLatest, fork, all,
} from 'redux-saga/effects';
import { getPokemonDetail as getPokemonDetailService } from '#services/pokemon';
import { GET_POKEMON_DETAIL_REQUEST } from '../actions/types';
import {
  getPokemonDetailSuccess,
  getPokemonDetailFailure,
} from '../actions';

export function* getPokemonDetail(payload) {
  try {
    const response = yield getPokemonDetailService(payload.index);
    yield put(getPokemonDetailSuccess(response));
  } catch (err) {
    yield put(getPokemonDetailFailure(err));
  }
}

export function* watchGetPokemonDetail() {
  yield takeLatest(GET_POKEMON_DETAIL_REQUEST, getPokemonDetail);
}

export default function* root() {
  yield all([
    fork(watchGetPokemonDetail),
  ]);
}
