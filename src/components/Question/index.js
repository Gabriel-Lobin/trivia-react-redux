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

  // category: 'General Knowledge',
  // type: 'multiple',
  // difficulty: 'hard',
  // question: 'De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?',
  // correct_answer: 'Center Parcs',
  // incorrect_answers: [
  //   'Yelloh Village',
  //   'Keycamp',
  //   'Villa Plus'
  // ]

  render() {
    const {
      data: {
        category,
        question,
        incorrect_answers: incorrectAnswers,
        correct_answer: correctAnswer,
      }
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
              {question}
            </p>
          </div>
        </section>
        <Answers
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
};

export default Question;
