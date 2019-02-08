import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages routes
import {
  PokemonList,
  PokemonDetail,
} from '#pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route path="/pokemon-detail" component={PokemonDetail} />
    </Switch>
  </Router>
);

export default Routes;
