import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  nextQuestions,
  startCronometer,
  btnNext,
  revealAnswers,
} from '../../redux/actions';
import Button from '../Button';
// abc

import './style.css';

class Answers extends Component {
  constructor(props) {
    super(props);

    this.nextBtn = this.nextBtn.bind(this);
  }

  nextBtn() {
    const { btnNextReducer } = this.props;
    btnNextReducer();
  }

  render() {
    const {
      answers,
      nextQuestion,
      startCronometerTime,
      currentQuestion,
      time,
      btnNextValue,
      setRevealAnswers,
      goToFeedback,
    } = this.props;
    const QUATRO = 4;

    return (
      <section className="answers">
        {answers.map((answer, index) => (
          <Button
            key={ index }
            time={ time }
            answer={ answer }
            nextBtn={ this.nextBtn }
          />
        ))}
        {btnNextValue || time === 0 ? (
          <button
            data-testid="btn-next"
            id="btn-next"
            onClick={ () => {
              nextQuestion();
              startCronometerTime();
              setRevealAnswers(false);
              if (currentQuestion === QUATRO) goToFeedback();
            } }
            type="button"
          >
            Próxima
          </button>
        ) : (
          false
        )}
      </section>
    );
  }
}

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnNextReducer: PropTypes.func.isRequired,
  btnNextValue: PropTypes.bool.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  goToFeedback: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  setRevealAnswers: PropTypes.func.isRequired,
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
  setRevealAnswers: (reveal) => dispatch(revealAnswers(reveal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
