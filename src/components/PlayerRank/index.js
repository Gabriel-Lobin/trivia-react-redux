import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PlayerRank extends Component {
  render() {
    const { player, index } = this.props;
    const { name, score, picture } = player;
    return (
      <li>
        <img src={ picture } alt="Icone do jogador" />
        <h3 data-testid={ `player-name-${index}` }>{`Nome: ${name}`}</h3>
        <h3 data-testid={ `player-score-${index}` }>{`${score} pontos`}</h3>
      </li>
    );
  }
}

PlayerRank.propTypes = {
  index: PropTypes.number.isRequired,
  player: PropTypes.func.isRequired,
};
