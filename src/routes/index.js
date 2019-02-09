import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages routes
import PokemonList from '#pages/pokemon-list';
import PokemonDetail from '#pages/pokemon-detail';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route path="/pokemon-detail/:index" component={PokemonDetail} />
    </Switch>
  </Router>
);

export default Routes;
