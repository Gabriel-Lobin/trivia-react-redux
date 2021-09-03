import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestionsThunk } from '../../redux/actions';

import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { token, getQuestions } = this.props;
    if (token) getQuestions({ token });
  }

  render() {
    console.log('Questions', this.props.questions);
    return (
      <main className="game-screen">
        <section className="questions">
          <div className="question-container">
            <span data-testid="question-category" className="question-category">
              Placeholder
            </span>
            <p className="question">Placeholder</p>
          </div>
          <div className="timer">30s</div>
        </section>
        <section className="answers">
          <button type="button">Placeholder</button>
          <button type="button">Placeholder</button>
          <button type="button">Placeholder</button>
          <button type="button">Placeholder</button>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(fetchQuestionsThunk({ token })),
});

const mapStateToProps = (state) => ({
  token: state.player.token,
  questions: state.player.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
