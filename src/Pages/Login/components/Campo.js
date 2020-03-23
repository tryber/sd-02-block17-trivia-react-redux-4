import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import settingsBtn from '../../../imgs/settings.png'
import './style.css';

class Campo extends React.Component {
  renderSettingsButton() {
    return (
      <Link to="/settings">
      <button className="settingsBtn">
        Teste
        {/* <img className="settingsIcon" src={settingsBtn} alt="settings icon" /> */}
      </button>
      </Link>
    )
  }

  renderLoginSection() {
    return (
      <div className="login_campo">
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Insira seu e-mail Gravatar"
        />
        <label htmlFor="name">Nome do Jogador:</label>
        <input
          id="name"
          name="name"
          type="name"
          placeholder="Insira seu nome"
        />
        <button className="btn-jogar">JOGAR!</button>
      </div>
    );
  }

  render() {
    return (
      <div className="whole-page">
        <div className="settingsDiv">
          {this.renderSettingsButton()}
        </div>
        {this.renderLoginSection()}
      </div>
    );
  }
}

export default Campo;

Campo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
