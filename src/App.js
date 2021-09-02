import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './redux/components/Login';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
    </Switch>
  );
}
