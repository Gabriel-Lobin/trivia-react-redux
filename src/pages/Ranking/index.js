import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlayerRank from '../../components/PlayerRank';
import './style.css';
import Primeiro from '../../utils/imgs/Primeiro.png';
import Segundo from '../../utils/imgs/Segundo.png';
import Terceiro from '../../utils/imgs/Terceiro.png';
import emBranco from '../../utils/imgs/emBranco.png';
import Logo from '../../utils/imgs/Logo.png';

export default class Ranking extends Component {
  constructor() {
    super();

    this.ranking = this.ranking.bind(this);
  }

  ranking(index) {
    switch (index) {
    case 0:
      return Primeiro;
    case 1:
      return Segundo;
    case 2:
      return Terceiro;
    default:
      return emBranco;
    }
  }

  render() {
    const json = localStorage.getItem('ranking');
    const players = JSON.parse(json);

    players.sort((a, b) => b.score - a.score);

    return (
      <>
        <div className="header">
          <img src={ Logo } alt="logotipo do site" className="logotipo" />
          <div>
            <h1 data-testid="ranking-title">Ranking</h1>
          </div>
          <Link to="/">
            <button
              type="button"
              data-testid="btn-go-home"
              className="btn-login-screen"
            >
              Tela de login
            </button>
          </Link>
        </div>
        <div className="players-area">
          {
            players.length > 0 || players === null
              ? players.map((player, index) => (
                <PlayerRank
                  key={ player.name }
                  player={ player }
                  index={ index }
                  ranking={ this.ranking(index) }
                />
              ))
              : <h2>Nenhum jogo encontrado</h2>
          }
        </div>
      </>
    );
  }
}
