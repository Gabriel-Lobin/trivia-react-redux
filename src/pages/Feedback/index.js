import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader';

const BASE_SCORE = 3;

class Feedback extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { name, score } = this.props;
    const imgPerson = this.fetchImg();

    const person = {
      name,
      score,
      picture: imgPerson,
    };

    const json = localStorage.getItem('ranking');
    const currentStorage = JSON.parse(json);

    const newStorage = [...currentStorage, person];

    localStorage.setItem('ranking', JSON.stringify(newStorage));
  }

  fetchImg() {
    const localStorageToken = localStorage.getItem('token');
    if (localStorageToken !== 'null') {
      return `https://www.gravatar.com/avatar/${localStorageToken}`;
    }
  }

  handleClick() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { questions, assertions, score } = this.props;
    const feedbackText = assertions >= BASE_SCORE ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <>
        <GameHeader />
        <main className="feedback">
          <h1 data-testid="feedback-text">{feedbackText}</h1>
          <h2>
            Você marcou
            {' '}
            <span data-testid="feedback-total-score">{score}</span>
          </h2>
          <h2>
            Você acertou
            {' '}
            <span data-testid="feedback-total-question">{assertions}</span>
            {` de ${questions.length}`}
          </h2>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.handleClick }
          >
            Jogar novamente
          </button>
        </main>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
  questions: state.questions.data,
  name: state.player.name,
});

export default connect(mapStateToProps, null)(Feedback);
