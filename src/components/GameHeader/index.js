import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameHeader extends Component {
  constructor(props) {
    super(props);

    this.localStorageValidation = this.localStorageValidation.bind(this);
  }

  localStorageValidation() {
    const localStorageToken = localStorage.getItem('token');

    if (localStorageToken !== 'null') {
      return `https://www.gravatar.com/avatar/${localStorageToken}`;
    }
    return 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
  }

  render() {
    const { nome, score } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ this.localStorageValidation() }
          alt="Imagem do jogador"
        />
        <h2 data-testid="header-player-name">{nome}</h2>
        <h2 data-testid="header-score">{ score }</h2>
      </header>
    );
  }
}

GameHeader.propTypes = {
  nome: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  nome: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(GameHeader);
