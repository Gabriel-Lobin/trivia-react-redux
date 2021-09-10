import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlayerRank from '../../components/PlayerRank';

export default class Ranking extends Component {
  render() {
    const json = localStorage.getItem('ranking');
    const players = JSON.parse(json);

    players.sort((a, b) => b.score - a.score);

    return (
      <>
        <h1 data-testid="ranking-title">Ranking</h1>
        {
          players.length > 0 || players === null
            ? players.map((player, index) => (
              <PlayerRank key={ player.name } player={ player } index={ index } />
            ))
            : <h2>Nenhum jogo encontrado</h2>
        }
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Tela de login</button>
        </Link>
      </>
    );
  }
}
