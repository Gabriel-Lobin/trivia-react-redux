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
        <ul>
          {
            players.length > 0 || players === null
              ? players.map((player, index) => (
                <PlayerRank key={ player.name } player={ player } index={ index } />
              ))
              : <h2>Nenhum jogo encontrado</h2>
          }
        </ul>

        <Link to="/">
          <button type="button" data-testid="btn-go-home">Tela de login</button>
        </Link>
      </>
    );
  }
}
