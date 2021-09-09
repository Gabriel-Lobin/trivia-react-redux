import React, { Component } from 'react';

export default class Ranking extends Component {
  render() {
    const json = localStorage.getItem('state');
    const player = JSON.parse(json);
    const { name, score } = player.player;

    return (
      <>
        <h3>{`Nome: ${name}`}</h3>
        <h3>{`${score} pontos`}</h3>
      </>
    );
  }
}
