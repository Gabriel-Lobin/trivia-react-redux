import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader';

const BASE_SCORE = 3;

class Feedback extends React.Component {
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
            {`de ${questions.length}`}
          </h2>
        </main>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  questions: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
  questions: state.questions.data,
});

export default connect(mapStateToProps, null)(Feedback);
