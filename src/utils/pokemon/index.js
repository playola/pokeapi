/**
 * Gets the Pokemon index from the url.
 * @param   {string} pokemonUrl Url that follows the syntax: "https://pokeapi.co/api/v2/pokemon/1/"
 * @returns {string}            "1"
 */
export const getPokemonIndex = pokemonUrl => (
  pokemonUrl.split('/').filter(item => !item.match('[^0-9]')).join('')
);

/**
 * Filter pokemons by 'name' key.
 * @param   {array}   pokemons  [{ name: 'hello world' }, { name: 'foo' }]
 * @param   {string}  name      'hello'
 * @returns {array}             [{ name: 'hello world' }]
 */
export const filterPokemonsByName = (pokemons, name) => (
  pokemons.filter(pokemon => pokemon.name.match(name))
);

/**
 * Filter pokemons by 'id' key.
 * @param   {array}   pokemons  [{ url: 'foo/v2/23' }, { url: 'foo/v2/11' }]
 * @param   {string}  id        '2'
 * @returns {array}             [{ url: 'foo/v2/23' }]
 */
export const filterPokemonsById = (pokemons, id) => (
  pokemons.filter(pokemon => getPokemonIndex(pokemon.url).match(id))
);
