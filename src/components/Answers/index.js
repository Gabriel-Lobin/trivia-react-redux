import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { answers, nextQuestion } = this.props;
    console.log(answers);
    return (
      <section className="answers">
        {answers.map((answer, index) => (
          <button
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
          onClick={ () => {
            nextQuestion();
          } }
          type="button"
        >
          next
        </button>
      </section>
    );
  }
}
