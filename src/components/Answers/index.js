import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestions, startCronometer } from '../../redux/actions';

class Answers extends Component {
  render() {
    const { answers, nextQuestion, startCronometerTime, currentQuestion, time } = this.props;
    return (
      <section className="answers">
        {answers.map((answer, index) => (
          <button
            disabled={ time > 0 ? false : true }
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
          disabled={ currentQuestion < 4 ? false : true }
          onClick={() => {
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

const mapStateToProps = (state) => ({
  currentQuestion: state.questions.currentQuestion,
  time: state.questions.time,
});

const mapDispatchToProps = (dispatch) => ({
  nextQuestion: () => dispatch(nextQuestions()),
  startCronometerTime: () => dispatch(startCronometer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
