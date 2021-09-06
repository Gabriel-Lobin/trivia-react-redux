import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestions, startCronometer } from '../../redux/actions';

class Answers extends Component {
  render() {
    const {
      answers,
      nextQuestion,
      startCronometerTime,
      currentQuestion,
      time,
    } = this.props;
    const QUATRO = 4;
    return (
      <section className="answers">
        {answers.map((answer, index) => (
          <button
            disabled={ time === 0 }
            data-testid={
              answer.correct ? 'correct-answer' : `wrong-answer${index}`
            }
            key={ index }
            type="button"
          >
            {answer.value}
          </button>
        ))}
        <button
          disabled={ currentQuestion === QUATRO }
          onClick={ () => {
            nextQuestion();
            startCronometerTime();
          } }
          type="button"
        >
          next
        </button>
      </section>
    );
  }
}

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  startCronometerTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currentQuestion: state.questions.currentQuestion,
  time: state.questions.time,
});

const mapDispatchToProps = (dispatch) => ({
  nextQuestion: () => dispatch(nextQuestions()),
  startCronometerTime: () => dispatch(startCronometer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
