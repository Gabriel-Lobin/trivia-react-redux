import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader';
import Question from '../../components/Question';

import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      time: 3,
    };

    this.stopInterval = this.stopInterval.bind(this);
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    const INITIAL_TIME = 4;
    const MAX_QUESTION = 4;
    const cronometro = setInterval(() => {
      const { time, currentQuestion } = this.state;

      if (currentQuestion >= MAX_QUESTION && time === 1) {
        this.setState({ time: 0 });
        this.stopInterval(cronometro);
      } else {
        if (time === 0) {
          this.setState((state) => ({
            time: state.time + INITIAL_TIME,
            currentQuestion: state.currentQuestion + 1,
          }));
        }
        this.setState((state) => ({
          time: state.time - 1,
        }));
      }
    }, ONE_SECOND);
  }

  stopInterval(cronometro) {
    clearInterval(cronometro);
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
          {
            this.renderQuestion()
              ? <Question data={ questions[currentQuestion] } time={ time } />
              : <h1>Loading...</h1>
          }
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
