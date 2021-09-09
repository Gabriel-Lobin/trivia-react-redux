import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestionsThunk, fetchStartThunk, saveFormData } from '../../redux/actions';

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
  }

  componentDidMount() {
    localStorage.setItem('ranking', JSON.stringify([]));
  }

  componentDidUpdate() {
    const { token, history, getQuestions } = this.props;
    if (token) {
      getQuestions({ token });
      localStorage.setItem('token', token);
      history.push('/game');
    }
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

    console.log(this.state);

    saveData(this.state);
    gameStart();
  }

  render() {
    const { nameLogin, emailLogin } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="nome-login">
            Nome:
            <input
              value={ nameLogin }
              data-testid="input-player-name"
              type="text"
              name="nameLogin"
              id="nome-login"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email-login">
            Email:
            <input
              value={ emailLogin }
              data-testid="input-gravatar-email"
              type="email"
              name="emailLogin"
              id="email-login"
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ this.disabledButton() }
            data-testid="btn-play"
            type="button"
            onClick={ this.startGame }
          >
            Jogar
          </button>
          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.handleClick }
          >
            Configurações
          </button>
        </form>
      </div>
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
  token: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getQuestions: ({ token }) => dispatch(fetchQuestionsThunk({ token })),
  saveData: (state) => dispatch(saveFormData(state)),
  gameStart: () => dispatch(fetchStartThunk()),
});

const mapStateToProps = (state) => ({
  token: state.login.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
