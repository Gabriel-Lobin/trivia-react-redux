import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nameLogin: '',
      emailLogin: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.disabledButton = this.disabledButton.bind(this);
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
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
