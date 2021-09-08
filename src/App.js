import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/Game/index';
import Login from './pages/Login/index';
import Config from './pages/Config/index';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
      <Route exact path="/config" component={ Config } />
      <Route exact path="/ranking" component={ Ranking } />
    </Switch>
  );
}
