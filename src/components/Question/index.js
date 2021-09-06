import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    this.setAnswers = this.setAnswers.bind(this);
    this.changeAnswers = this.changeAnswers.bind(this);
  }

  componentDidMount() {
    const {
      data: {
        incorrect_answers: incorrectAnswers, correct_answer: correctAnswer,
      } } = this.props;
    this.setAnswers(incorrectAnswers, correctAnswer);
  }

  setAnswers(incorrectAnswers, correctAnswer) {
    this.setState({
      answers: [
        {
          value: correctAnswer,
          correct: true,
        },
        ...incorrectAnswers.map((incAnswer) => ({
          value: incAnswer,
          correct: false,
        })),
      ],
    });
  }

  changeAnswers() {
    const { time } = this.props;
    if (time === 0) {
      const {
        data: {
          incorrect_answers: incorrectAnswers, correct_answer: correctAnswer,
        } } = this.props;
      this.setAnswers(incorrectAnswers, correctAnswer);
    }
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
    const { answers } = this.state;
    const { data: { category, question }, time } = this.props;
    return (
      <>
        <section className="questions">
          <div className="question-container">
            <span data-testid="question-category" className="question-category">
              {category}
            </span>
            <p data-testid="question-text" className="question-text">
              {question}
            </p>
          </div>
          <div className="timer">{`${time}s`}</div>
        </section>
        <section className="answers">
          {answers.map((answer, index) => (
            <button
              data-testid={answer.correct ? 'correct-answer' : `wrong-answer${index}`}
              key={index}
              type="button"
            >
              {answer.value}
            </button>
          ))}
        </section>
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
