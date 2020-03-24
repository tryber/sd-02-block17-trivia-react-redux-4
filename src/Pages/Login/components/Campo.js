import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import settingsBtn from '../../../imgs/settings.png';
import './style.css';


const renderLoginSection = () => (
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
    <Link to="/game-page">
      <button className="btn-jogar">JOGAR!</button>
    </Link>
  </div>
);

const renderSettingsButton = () => (
  <Link to="/settings">
    <icon className="settingsBtn">
      <img className="settingsIcon" src={settingsBtn} alt="settings icon" />
    </icon>
  </Link>
);

class Campo extends React.Component {
  render() {
    return (
      <div className="whole-page">
        <div className="settingsDiv">
          {renderSettingsButton()}
        </div>
        {renderLoginSection()}
      </div>
    );
  }
}

export default Campo;

Campo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
