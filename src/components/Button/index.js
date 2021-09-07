import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { revealAnswers, setChronometer } from '../../redux/actions';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.setClassName = this.setClassName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setClassName(reveal, answer) {
    if (reveal) return answer.correct ? 'correct-answer' : 'wrong-answer';
    return '';
  }

  handleClick() {
    const { nextBtn, setRevealAnswers, chronometer, setChronometerInstance } = this.props;
    nextBtn();
    clearInterval(chronometer);
    setChronometerInstance(null);
    setRevealAnswers(true);
  }

  render() {
    const { answer, reveal, time, key } = this.props;

    return (
      <button
        className={ this.setClassName(reveal, answer) }
        disabled={ time === 0 }
        data-testid={
          answer.correct ? 'correct-answer' : `wrong-answer${key}`
        }
        type="button"
        onClick={ this.handleClick }
      >
        {answer.value}
      </button>
    );
  }
}

Button.propTypes = {
  answer: PropTypes.shape({
    correct: PropTypes.bool,
    value: PropTypes.string,
  }).isRequired,
  chronometer: PropTypes.number.isRequired,
  key: PropTypes.number,
  nextBtn: PropTypes.func.isRequired,
  reveal: PropTypes.bool.isRequired,
  setChronometerInstance: PropTypes.func.isRequired,
  setRevealAnswers: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

Button.defaultProps = {
  key: 0,
};

const mapDispatchToProps = (dispatch) => ({
  setRevealAnswers: (reveal) => dispatch(revealAnswers(reveal)),
  setChronometerInstance: (chronometer) => dispatch(setChronometer(chronometer)),
});

const mapStateToProps = (state) => ({
  reveal: state.questions.reveal,
  chronometer: state.timer.chronometer,
});
export default connect(mapStateToProps, mapDispatchToProps)(Button);
