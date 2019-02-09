import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '#components';
import { capitalizeFirstLetter } from '#utils/strings';
import { getPokemonDetail } from './store/actions';
import { DetailsWrapper } from './styles';

const PokemonDetail = React.memo(({ pokemonDetail, match, getPokemonDetail }) => {
  /**
   * Fetch pokemon detail from API when the component mounts.
   */
  useEffect(() => {
    getPokemonDetail(match.params.index);
  }, []);

  return (
    <div>
      <Header />
      <DetailsWrapper>
        <span>{ `ID: ${pokemonDetail.id}` }</span>
        <span>{ `Name: ${capitalizeFirstLetter(pokemonDetail.name)}` }</span>
        { pokemonDetail.moves && pokemonDetail.moves.length > 0
          ? <span>{ `Moves: ${pokemonDetail.moves.length}` }</span>
          : <span>Moves: 0</span>
        }
        { pokemonDetail.types && pokemonDetail.types.map(typeItem => (
          <span key={`index_${typeItem.slot}`}>
            { `Type slot ${typeItem.slot}: ${capitalizeFirstLetter(typeItem.type.name)}` }
          </span>
        ))}
      </DetailsWrapper>
    </div>
  );
});

PokemonDetail.propTypes = {
  pokemonDetail: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  getPokemonDetail: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemonDetailReducer }) => ({
  pokemonDetail: pokemonDetailReducer.pokemonDetail,
});

const mapDispatchToProps = {
  getPokemonDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
