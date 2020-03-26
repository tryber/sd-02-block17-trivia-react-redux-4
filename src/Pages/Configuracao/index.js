import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCategorys } from '../../actions/categorysAPI';
import getCategory from '../../Services/configAPI';
import Dropdown from './Components/Dropdown';
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

  async componentDidMount() {
    const { getCategorys } = this.props;
    const array = [];
    await getCategory().then((data) => {
      array.push(...data.trivia_categories.map((item) => item.name));
    });
    getCategorys(array);
  }

  render() {
    const { categorys } = this.props;
    // console.log('categorys' + categorys)
    return (
      <div className="page_config">
        <p ref={this.ref} />
        <div className="content">
          <div className="campo">
            <p>Categoria:</p>
            <Dropdown options={categorys} type="category" testid="question-category-dropdown" />
          </div>
          <div className="campo">
            <p>Dificuldade:</p>
            <Dropdown options={this.difficulty} type="difficulty" testid="question-difficulty-dropdown" />
          </div>
          <div className="campo">
            <p>Tipo:</p>
            <Dropdown options={this.type} type="type" testid="question-type-dropdown" />
          </div>
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
