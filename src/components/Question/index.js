import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    this.setAnswers = this.setAnswers.bind(this);
  }

  componentDidMount() {
    const { data: { incorrect_answers, correct_answer } } = this.props;
    this.setAnswers(incorrect_answers, correct_answer);
  }

  setAnswers(incorrect_answers, correct_answer) {
    this.setState({
      answers: [
        {
          value: correct_answer,
          correct: true,
        },
        ...incorrect_answers.map((incAnswer) => ({
          value: incAnswer,
          correct: false,
        })),
      ],
    });
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
    const { data: { category, question } } = this.props;

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
          <div className="timer">30s</div>
        </section>
        <section className="answers">
          {answers.map((answer, index) => (
            <button
              data-testid={ answer.correct ? 'correct-answer' : `wrong-answer${index}` }
              key={ index }
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

export default Question;
