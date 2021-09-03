import React from 'react';
import { connect } from 'react-redux';
import GameHeader from '../components/GameHeader';

class Game extends React.Component {
  render() {
    return (
      <div>
        <header><GameHeader /></header>
        Game Page
      </div>
    );
  }
}

export default connect(null, null)(Game);
