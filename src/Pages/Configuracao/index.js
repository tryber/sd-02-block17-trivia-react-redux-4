import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addCategorys } from '../../actions/categorysAPI';
import getCategory from '../../Services/configAPI';
import Dropdown from './Components/Dropdown';
import TriviaLogo from '../../trivia.png';
import './style.css';

class Configuracao extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.difficulty = [
      'easy',
      'medium',
      'hard',
    ];
    this.type = [
      'Multiple Choice',
      'True / False',
    ];
  }

  static renderGameLogo() {
    return (
      <div>
        <img src={TriviaLogo} className="trivia-logo" alt="Trivia Logo" />
      </div>
    );
  }

  static renderVoltarButton() {
    return (
      <div className="ending-div">
        <Link to="/">
          <button type="button" className="botao-voltar">Voltar</button>
        </Link>
      </div>
    );
  }

  async componentDidMount() {
    const { getCategorys } = this.props;
    const array = [];
    await getCategory().then((data) => {
      array.push(...data.trivia_categories.map((item) => item.name));
    });
    getCategorys(array);
  }

  renderCategoria() {
    const { categorys } = this.props;
    return (
      <div className="campo">
        <p>Categoria:</p>
        <Dropdown
          options={categorys}
          type="category"
          testid="question-category-dropdown"
        />
      </div>
    );
  }

  renderDifficulty() {
    return (
      <div className="campo">
        <p>Dificuldade:</p>
        <Dropdown
          options={this.difficulty}
          type="difficulty"
          testid="question-difficulty-dropdown"
        />
      </div>
    );
  }

  renderTipo() {
    return (
      <div className="campo">
        <p>Tipo:</p>
        <Dropdown
          options={this.type}
          type="type"
          testid="question-type-dropdown"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="page_config">
        <p ref={this.ref} />
        <div className="content">
          {Configuracao.renderGameLogo()}
          {this.renderCategoria()}
          {this.renderDifficulty()}
          {this.renderTipo()}
          {Configuracao.renderVoltarButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categorys: state.categorysAPIReducer.categorys,
});

const mapDispatchToProps = (dispatch) => ({
  getCategorys: (categorys) => dispatch(addCategorys(categorys)),
});

Configuracao.propTypes = {
  categorys: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  getCategorys: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuracao);
