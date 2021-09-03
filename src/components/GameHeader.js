import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameHeader extends Component {
  constructor() {
    super();

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
    const { nome } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ this.localStorageValidation() }
          alt="Imagem do jogador"
        />
        <h2 data-testid="header-player-name">{nome}</h2>
        <h2 data-testid="header-score">0</h2>
      </header>
    );
  }
}

GameHeader.propTypes = {
  nome: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  nome: state.player.nome,
});

export default connect(mapStateToProps)(GameHeader);
