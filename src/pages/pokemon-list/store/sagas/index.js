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
    /**
     * Get the cookie and check if exsists and if it's valid.
     */
    const cookieValue = getCookie('pokemons');
    if (cookieValue && !payload.offset) {
      yield put(getPokemonsSuccess(cookieValue));
    } else {
      const response = yield getPokemonsService(payload.offset);
      /**
       * Check if we need to concat with the current value or push for the first time.
       */
      const newCookieValue = cookieValue && cookieValue.length > 0
        ? cookieValue.concat(response.data.results)
        : response.data.results;
      /**
       * Set cookie with the updated new pokemons list.
       * Expiration time fixed to one day.
       */
      setCookie('pokemons', newCookieValue, { maxAge: 24 * 60 * 60 });
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
