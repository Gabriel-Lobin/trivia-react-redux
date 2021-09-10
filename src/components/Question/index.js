import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers';
import Timer from '../Timer';
import fixEncodedWords from '../../utils/fixEncodedWords';

import './style.css';

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
      <section className="questions">
        <Timer />
        <div className="question-container">
          <span data-testid="question-category" className="question-category">
            {category}
          </span>
          <p data-testid="question-text" className="question-text">
            {fixEncodedWords(question)}
          </p>
        </div>
        <Answers
          goToFeedback={ goToFeedback }
          answers={ answers || DEFAULT_ANSWERS }
        />
      </section>
    );
  }
}

Question.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  goToFeedback: PropTypes.func.isRequired,
};

export default Question;
