import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestions, startCronometer, btnNext } from '../../redux/actions';

class Answers extends Component {
  constructor(props) {
    super(props);

    this.nextBtn = this.nextBtn.bind(this);
  }

  nextBtn() {
    const { btnNextReducer } = this.props;
    btnNextReducer();
    console.log('foi');
  }

  render() {
    const {
      answers,
      nextQuestion,
      startCronometerTime,
      currentQuestion,
      time,
      btnNextValue,
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
            onClick={ this.nextBtn }
          >
            {answer.value}
          </button>
        ))}
        { btnNextValue ? (
          <button
            disabled={ currentQuestion === QUATRO }
            data-testid="btn-next"
            onClick={ () => {
              nextQuestion();
              startCronometerTime();
            } }
            type="button"
          >
            Próxima
          </button>)
          : false }
      </section>
    );
  }
}

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnNextReducer: PropTypes.func.isRequired,
  btnNextValue: PropTypes.bool.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  startCronometerTime: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currentQuestion: state.questions.currentQuestion,
  time: state.questions.time,
  btnNextValue: state.questions.btnNext,
});

const mapDispatchToProps = (dispatch) => ({
  nextQuestion: () => dispatch(nextQuestions()),
  startCronometerTime: () => dispatch(startCronometer()),
  btnNextReducer: () => dispatch(btnNext()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
