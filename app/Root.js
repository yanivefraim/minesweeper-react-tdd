import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {Home} from './components/Home';
import {Game} from './components/Game';

export const Root = () => {
  return (

    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/new" component={Game}/>
    </Router>
  );
};
