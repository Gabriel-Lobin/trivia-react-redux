import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class PlayerRank extends Component {
  render() {
    const { player, index, ranking } = this.props;
    const { name, score, picture } = player;
    return (
      <div className="player">
        <img src={ picture } alt="Icone do jogador" className="player-icon" />
        <h3 data-testid={ `player-name-${index}` } className="player-name">{name}</h3>
        <h3
          data-testid={ `player-score-${index}` }
          className="player-score"
        >
          {`${score} pontos`}
        </h3>
        <img src={ ranking } alt="Ranking do jogador" className="player-ranking" />
      </div>
    );
  }
}

PlayerRank.propTypes = {
  index: PropTypes.number.isRequired,
  player: PropTypes.func.isRequired,
  ranking: PropTypes.number.isRequired,
}
