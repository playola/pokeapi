import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '#components';
import { capitalizeFirstLetter } from '#utils/strings';
import { DetailsWrapper } from './styles';

const PokemonDetail = React.memo(({ pokemonDetail }) => (
  <div>
    <Header />
    <DetailsWrapper>
      <span>{ `ID: ${pokemonDetail.id}` }</span>
      <span>{ `Name: ${capitalizeFirstLetter(pokemonDetail.name)}` }</span>
      { pokemonDetail.moves && pokemonDetail.moves.length > 0
        ? (
          <span>
            { `Moves: ${pokemonDetail.moves.length}` }
          </span>
        )
        : (
          <span>Moves: 0</span>
        )
      }
      { pokemonDetail.types && pokemonDetail.types.map(typeItem => (
        <span key={`index_${typeItem.slot}`}>
          { `Type slot ${typeItem.slot}: ${capitalizeFirstLetter(typeItem.type.name)}` }
        </span>
      ))}
    </DetailsWrapper>
  </div>
));

PokemonDetail.propTypes = {
  pokemonDetail: PropTypes.shape({}).isRequired,
};

export default PokemonDetail;