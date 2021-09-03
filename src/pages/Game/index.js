import React from 'react';
import { connect } from 'react-redux';
import Question from '../../components/Question';

import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
  }

  renderQuestion() {
    const { questions } = this.props;
    console.log(questions);
    if (questions.length) {
      return true;
    }
    return false;
  }

  render() {
    const { questions } = this.props;
    const { currentQuestion } = this.state;

    return (
      <main className="game-screen">
        {
          this.renderQuestion()
            ? <Question data={ questions[currentQuestion] } />
            : <h1>Loading...</h1>
        }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.data,
});

export default connect(mapStateToProps, null)(Game);
