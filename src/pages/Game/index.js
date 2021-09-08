import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader/index';
import Question from '../../components/Question';

import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.goToFeedback = this.goToFeedback.bind(this);
  }

  componentDidMount() {
    const { player } = this.props;
    localStorage.setItem('state', JSON.stringify({ player }));
  }

  goToFeedback() {
    const { history } = this.props;
    history.push('/feedback');
  }

  renderQuestion() {
    const { questions } = this.props;
    return !!questions.length;
  }

  render() {
    const { questions, currentQuestion } = this.props;

    return (
      <>
        <GameHeader />
        <main className="game-screen">
          {this.renderQuestion() ? (
            <Question
              goToFeedback={ this.goToFeedback }
              nextQuestion={ this.nextQuestion }
              data={ questions[currentQuestion] }
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </main>
      </>
    );
  }
}

Game.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.objectOf().isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
  questions: state.questions.data,
  currentQuestion: state.questions.currentQuestion,
});

export default connect(mapStateToProps, null)(Game);
