import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader';
import Question from '../../components/Question';
import Timer from '../../components/Timer';

import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      time: 3,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    this.setState((state) => ({ time: 4, currentQuestion: state.currentQuestion + 1 }));
  }

  renderQuestion() {
    const { questions } = this.props;
    return !!questions.length;
  }

  render() {
    const { questions } = this.props;
    const { currentQuestion, time } = this.state;

    return (
      <>
        <GameHeader />
        <main className="game-screen">
          {this.renderQuestion() ? (
            <Question
              nextQuestion={ this.nextQuestion }
              data={ questions[currentQuestion] }
              time={ time }
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
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.questions.data,
});

export default connect(mapStateToProps, null)(Game);
