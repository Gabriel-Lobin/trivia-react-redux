import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers';
import Timer from '../Timer';

class Question extends Component {
  constructor(props) {
    super(props);
    this.setAnswers = this.setAnswers.bind(this);
  }

  setAnswers(incorrectAnswers, correctAnswer) {
    if (incorrectAnswers || correctAnswer) {
      return [
        {
          value: correctAnswer,
          correct: true,
        },
        ...incorrectAnswers.map((incAnswer) => ({
          value: incAnswer,
          correct: false,
        })),
      ];
    }
    return [];
  }

  render() {
    const {
      data: {
        category,
        question,
        incorrect_answers: incorrectAnswers,
        correct_answer: correctAnswer,
      },
      goToFeedback,
    } = this.props;
    // código para decode do HTML text que a api retorna.
    //  https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
    const renderHTML = (
      escapedHTML,
    ) => React.createElement('div', {
      dangerouslySetInnerHTML: { __html: escapedHTML },
    });
    return (
      <>
        <Timer />
        <section className="questions">
          <div className="question-container">
            <span data-testid="question-category" className="question-category">
              {category}
            </span>
            <p data-testid="question-text" className="question-text">
              {renderHTML(question)}
            </p>
          </div>
        </section>
        <Answers
          goToFeedback={ goToFeedback }
          answers={ this.setAnswers(incorrectAnswers, correctAnswer) }
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
