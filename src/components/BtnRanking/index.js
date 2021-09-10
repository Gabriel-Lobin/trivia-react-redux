import React, { Component } from 'react';
import { GiPodium } from 'react-icons/gi';

export default class BtnRanking extends Component {
  render() {
    return (
      <button className="ranking-btn" data-testid="btn-ranking" type="button">
        <GiPodium />
      </button>
    );
  }
}
