import React from 'react';
import { Link } from 'react-router-dom';
import settingsBtn from '../../../imgs/settings.png';
import './style.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderLoginSection() {
    return (
      <div className="login_campo">
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          id="email"
          name="email"
          type="text"
          data-testid="input-gravatar-email"
          placeholder="Insira seu e-mail Gravatar"
          onChange={(event) => this.handleChange(event)}
        />
        <label htmlFor="name">Nome do Jogador:</label>
        <input
          id="name"
          name="username"
          type="name"
          data-testid="input-player-name"
          placeholder="Insira seu nome"
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }

  renderJogarButton() {
    const { username, email } = this.state;
    console.log(username, email);
    let disabled = false;
    if (username === '' || email === '') {
      disabled = true;
    }

    return (
      <Link to="/game-page">
        <button className="btn-jogar" data-testid="btn-play" disabled={disabled}>JOGAR!</button>
      </Link>
    );
  }

  renderSettingsButton() {
    return (
      <div>
        <Link to="/settings">
          <icon className="settingsBtn" data-testid="config-button">
            <img className="settingsIcon" src={settingsBtn} alt="settings icon" />
          </icon>
        </Link>
      </div>
    );
  }

  render() {
    const { loginInputs } = this.props;
    return (
      <div className="whole-page">
        <div className="settingsDiv">
          {this.renderSettingsButton()}
        </div>
        {this.renderLoginSection(loginInputs)}
        {this.renderJogarButton()}
      </div>
    );
  }
}

export default LoginPage;