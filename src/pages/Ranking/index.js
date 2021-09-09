import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Ranking extends Component {
  render() {
    const json = localStorage.getItem('state');
    const player = JSON.parse(json);
    const { name, score, img } = player.player;

    return (
      <>
        <img src={ img } alt="Icone do jogador" />
        <h3 data-testid={ `player-name-${0}` }>{`Nome: ${name}`}</h3>
        <h3 data-testid={ `player-score-${0}` }>{`${score} pontos`}</h3>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Tela de login</button>
        </Link>
      </>
    );
  }
}
