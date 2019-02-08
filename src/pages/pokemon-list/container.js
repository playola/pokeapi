import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { getPokemons } from './store/actions';
import PokemonList from './PokemonList';

const mapStateToProps = ({ pokemonListReducer }) => ({
  pokemons: pokemonListReducer.pokemons,
});

const mapDispatchToProps = {
  getPokemons,
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      const { getPokemons } = this.props;
      getPokemons();
    },
  }),
);

export default enhance(PokemonList);
