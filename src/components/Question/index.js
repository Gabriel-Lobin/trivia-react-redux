import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers';
import Timer from '../Timer';
import fixEncodedWords from '../../utils/fixEncodedWords';

const DEFAULT_ANSWERS = [];

class Question extends Component {
  render() {
    const {
      data: {
        category,
        question,
        answers,
      },
      goToFeedback,
    } = this.props;

    return (
      <>
        <Timer />
        <section className="questions">
          <div className="question-container">
            <span data-testid="question-category" className="question-category">
              {category}
            </span>
            <p data-testid="question-text" className="question-text">
              {fixEncodedWords(question)}
            </p>
          </div>
        </section>
        <Answers
          goToFeedback={ goToFeedback }
          answers={ answers || DEFAULT_ANSWERS }
        />
      </>
    );
  }
}

Question.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    correct_answer: PropTypes.string,
  }).isRequired,
  goToFeedback: PropTypes.func.isRequired,
};

export default Question;
