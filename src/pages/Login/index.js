import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FcEngineering } from 'react-icons/fc';
import {
  fetchQuestionsThunk,
  fetchStartThunk,
  saveFormData,
  resetStateLogin,
  resetStatePlayer,
  resetStateQuestions,
} from '../../redux/actions';
import './style.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nameLogin: '',
      emailLogin: '',
      img: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.disabledButton = this.disabledButton.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetSetState = this.resetSetState.bind(this);
    // this.resetLocalStorage = this.resetLocalStorage.bind(this);
    this.resetStateGlobal = this.resetStateGlobal.bind(this);
  }

  componentDidMount() {
    // this.resetLocalStorage();
    this.resetSetState();
    this.resetStateGlobal();
  }

  componentDidUpdate() {
    const { token, history, getQuestions } = this.props;
    if (token) {
      getQuestions({ token });
      localStorage.setItem('token', token);
      history.push('/game');
    }
  }

  // resetLocalStorage() {
  //   const json = localStorage.getItem('ranking');
  //   const currentStorage = JSON.parse(json);

  //   console.log(currentStorage);

  //   if (currentStorage === null) {
  //     localStorage.setItem('ranking', JSON.stringify([]));
  //   }
  //   localStorage.setItem('token', 'token');
  //   localStorage.setItem('state', 'state');
  // }

  resetSetState() {
    this.setState({
      nameLogin: '',
      emailLogin: '',
      img: '',
    });
  }

  resetStateGlobal() {
    const {
      resetStateLoginReducer,
      resetStatePlayerReducer,
      resetStateQuestionsReducer,
    } = this.props;
    resetStateLoginReducer();
    resetStatePlayerReducer();
    resetStateQuestionsReducer();
  }

  handleClick() {
    const { history } = this.props;
    history.push('/config');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  disabledButton() {
    const { nameLogin, emailLogin } = this.state;
    if (nameLogin !== '' && emailLogin.includes('@' && '.com')) {
      return false;
    }
    return true;
  }

  async startGame() {
    const { gameStart, saveData } = this.props;
    const localStorageToken = localStorage.getItem('token');
    const imgPerson = localStorageToken !== 'null'
      ? `https://www.gravatar.com/avatar/${localStorageToken}`
      : 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';

    await this.setState({
      img: imgPerson,
    });

    saveData(this.state);
    gameStart();
  }

  render() {
    const { nameLogin, emailLogin } = this.state;
    return (
      <main className="login-screen">
        <form>
          <input
            placeholder="Nome"
            value={ nameLogin }
            data-testid="input-player-name"
            type="text"
            name="nameLogin"
            id="nome-login"
            onChange={ this.handleChange }
          />
          <input
            placeholder="Email"
            value={ emailLogin }
            data-testid="input-gravatar-email"
            type="email"
            name="emailLogin"
            id="email-login"
            onChange={ this.handleChange }
          />
          <button
            className="special-btn"
            disabled={ this.disabledButton() }
            data-testid="btn-play"
            type="button"
            onClick={ this.startGame }
          >
            Jogar
          </button>
          <button
            className="settings-btn"
            type="button"
            data-testid="btn-settings"
            onClick={ this.handleClick }
          >
            <FcEngineering />
          </button>
        </form>
      </main>
    );
  }
}

Login.defaultProptype = {
  login: '',
};

Login.propTypes = {
  gameStart: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveData: PropTypes.func.isRequired,
  resetStateLoginReducer: PropTypes.func.isRequired,
  resetStatePlayerReducer: PropTypes.func.isRequired,
  resetStateQuestionsReducer: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getQuestions: ({ token }) => dispatch(fetchQuestionsThunk({ token })),
  saveData: (state) => dispatch(saveFormData(state)),
  gameStart: () => dispatch(fetchStartThunk()),
  resetStateLoginReducer: () => dispatch(resetStateLogin()),
  resetStatePlayerReducer: () => dispatch(resetStatePlayer()),
  resetStateQuestionsReducer: () => dispatch(resetStateQuestions()),
});

const mapStateToProps = (state) => ({
  token: state.login.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
