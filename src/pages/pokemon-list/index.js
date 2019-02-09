import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, InputField, Button } from '#components';
import { capitalizeFirstLetter } from '#utils/strings';
import {
  getPokemonIndex,
  filterPokemonsByName,
  filterPokemonsById,
} from '#utils/pokemon';
import { getPokemons } from './store/actions';
import {
  PokemonsWrapper,
  FormWrapper,
  PokemonWrapper,
  PokemonText,
} from './styles';

const PokemonList = React.memo(({ pokemons, getPokemons }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [offset, updateOffset] = useState(30);

  /**
   * Fetch pokemons from API when the component mounts.
   */
  useEffect(() => {
    getPokemons();
  }, []);

  /**
   * Infinite scroll behavior.
   */
  useEffect(() => {
    // TODO: add debounce.
    window.onscroll = () => {
      const docElement = document.documentElement;
      if (window.innerHeight + docElement.scrollTop === docElement.offsetHeight) {
        getPokemons(offset);
        updateOffset(offset + 30);
      }
    };
  });

  /**
   * Filter pokemons by name and id.
   */
  const filteredByName = filterPokemonsByName(pokemons, name);
  const filteredPokemons = filterPokemonsById(filteredByName, id);

  return (
    <div>
      <Header disabled />
      <PokemonsWrapper>
        <FormWrapper>
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
        </FormWrapper>
        { filteredPokemons && filteredPokemons.length > 0
        && filteredPokemons.map((pokemon, index) => (
          <PokemonWrapper key={`${index}_${pokemon.name}`}>
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
  getPokemons: PropTypes.func.isRequired,
};

PokemonList.defaultProps = {
  pokemons: [],
};

const mapStateToProps = ({ pokemonListReducer }) => ({
  pokemons: pokemonListReducer.pokemons,
});

const mapDispatchToProps = {
  getPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
