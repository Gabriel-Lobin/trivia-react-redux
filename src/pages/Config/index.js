import React from 'react';
import { Link } from 'react-router-dom';

export default class Config extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <Link to="/">Login</Link>
      </div>
    );
  }
}
