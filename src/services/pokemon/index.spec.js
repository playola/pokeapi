import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { baseUrl, getPokemons, getPokemonDetail } from './index';

describe('Pokemon service', () => {
  it('returns data when getPokemons is called', (done) => {
    const mock = new MockAdapter(axios);
    const dataMock = {
      response: {
        data: [{ name: 'foo' }],
      },
    };
    mock.onGet(`${baseUrl}/pokemon?limit=30&offset=0`).reply(200, dataMock);

    getPokemons().then((response) => {
      expect(response.data).toEqual(dataMock);
      done();
    });
  });

  it('returns data when getPokemonDetail is called', (done) => {
    const mock = new MockAdapter(axios);
    const dataMock = {
      response: {
        data: [{ name: 'foo' }],
      },
    };
    mock.onGet(`${baseUrl}/pokemon/1`).reply(200, dataMock);

    getPokemonDetail().then((response) => {
      expect(response.data).toEqual(dataMock);
      done();
    });
  });
});
