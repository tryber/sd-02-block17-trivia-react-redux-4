import React from 'react';
import PropTypes from 'prop-types';
import MD5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { catchEmail } from '../../../actions/gravatarAction';
import { thunkToken } from '../../../actions';
import settingsBtn from '../../../imgs/settings.png';
import './style.css';


class LoginPage extends React.Component {
  generateTokenQuestions() {
    const { importedGravatarReducer, email, importedTokenReducer } = this.props;
    importedGravatarReducer(MD5(email).toString());
    importedTokenReducer();
  }

  renderLoginSection() {
    const { importedGravatarReducer, email } = this.props;
    return (
      <div className="login_campo">
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => importedGravatarReducer(e.target.value)}
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
          <button
            className="btn-jogar"
            onClick={() => this.generateTokenQuestions()}
          >
            JOGAR!
          </button>
        </Link>
      </div>
    );
  }

  renderSettingsButton() {
    console.log(this);
    return (
      <Link to="/settings">
        <div className="settingsBtn">
          <img className="settingsIcon" src={settingsBtn} alt="settings icon" />
        </div>
      </Link>
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

LoginPage.propTypes = {
  importedGravatarReducer: PropTypes.func.isRequired,
  importedTokenReducer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

LoginPage.defaultProps = {
  email: '',
};

const mapStateToProps = ({ gravatarReducer: { email } }) => ({ email });

const mapDispatchToProps = (dispatch) => ({
  importedGravatarReducer: (email) => dispatch(catchEmail(email)),
  importedTokenReducer: () => dispatch(thunkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
