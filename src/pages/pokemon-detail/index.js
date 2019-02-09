import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '#components';
import { capitalizeFirstLetter } from '#utils/strings';
import { getPokemonDetail } from './store/actions';
import { DetailsWrapper } from './styles';

const PokemonDetail = React.memo(({ pokemonDetail, match, getPokemonDetail }) => {
  const {
    id, name, moves, types,
  } = pokemonDetail;

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
        <span>{ `ID: ${id}` }</span>
        <span>{ `Name: ${capitalizeFirstLetter(name)}` }</span>
        { moves && moves.length > 0
          ? <span>{ `Moves: ${moves.length}` }</span>
          : <span>Moves: 0</span>
        }
        { types && types.map(typeItem => (
          <span key={`index_${typeItem.slot}`}>
            { `Type slot ${typeItem.slot}: ${capitalizeFirstLetter(typeItem.type.name)}` }
          </span>
        ))}
      </DetailsWrapper>
    </div>
  );
});

PokemonDetail.propTypes = {
  pokemonDetail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    moves: PropTypes.arrayOf(PropTypes.object),
    types: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      index: PropTypes.string,
    }),
  }).isRequired,
  getPokemonDetail: PropTypes.func.isRequired,
};

const mapStateToProps = ({ pokemonDetailReducer }) => ({
  pokemonDetail: pokemonDetailReducer.pokemonDetail,
});

const mapDispatchToProps = {
  getPokemonDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
