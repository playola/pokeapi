import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { getPokemonDetail } from './store/actions';
import PokemonDetail from './PokemonDetail';

const mapStateToProps = ({ pokemonDetailReducer }) => ({
  pokemonDetail: pokemonDetailReducer.pokemonDetail,
});

const mapDispatchToProps = {
  getPokemonDetail,
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      const { match, getPokemonDetail } = this.props;
      getPokemonDetail(match.params.index);
    },
  }),
);

export default enhance(PokemonDetail);
