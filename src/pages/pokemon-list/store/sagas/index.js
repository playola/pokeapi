import {
  put, takeLatest, fork, all,
} from 'redux-saga/effects';
import { getPokemons as getPokemonsService } from '#services/pokemon';
import { setCookie, getCookie } from '#utils/cookies';
import { GET_POKEMONS_REQUEST } from '../actions/types';
import {
  getPokemonsSuccess,
  getPokemonsFailure,
} from '../actions';

export function* getPokemons(payload) {
  try {
    const cookieValue = getCookie('pokemons');
    if (cookieValue && !payload.offset) {
      yield put(getPokemonsSuccess(cookieValue));
    } else {
      const response = yield getPokemonsService(payload.offset);
      const newCookieValue = cookieValue && cookieValue.length > 0
        ? cookieValue.concat(response.data.results)
        : response.data.results;
      setCookie('pokemons', newCookieValue, 60);
      yield put(getPokemonsSuccess(response.data.results));
    }
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
