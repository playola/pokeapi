import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, InputField, Button } from '#components';
import { capitalizeFirstLetter } from '#utils/strings';
import {
  getPokemonIndex,
  filterPokemonsByName,
  filterPokemonsById,
} from '#utils/pokemon';
import {
  PokemonsWrapper,
  PokemonWrapper,
  PokemonText,
} from './styles';

const PokemonList = React.memo(({ pokemons }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  /**
   * Filter pokemons by name and id.
   */
  const filteredByName = filterPokemonsByName(pokemons, name);
  const filteredPokemons = filterPokemonsById(filteredByName, id);

  return (
    <div>
      <Header />
      <PokemonsWrapper>
        <InputField
          placeholder="Filter by name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputField
          placeholder="Filter by id"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        { filteredPokemons && filteredPokemons.length > 0 && filteredPokemons.map(pokemon => (
          <PokemonWrapper key={pokemon.name}>
            <PokemonText>{ getPokemonIndex(pokemon.url) }</PokemonText>
            <PokemonText>{ capitalizeFirstLetter(pokemon.name) }</PokemonText>
            <Link to={`/pokemon-detail/${getPokemonIndex(pokemon.url)}`}>
              <Button>Go!</Button>
            </Link>
          </PokemonWrapper>
        ))}
      </PokemonsWrapper>
    </div>
  );
});

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

PokemonList.defaultProps = {
  pokemons: [],
};

export default PokemonList;
