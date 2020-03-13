import React, { Component } from 'react';

import './style.css';

import Dropdown from './Components/Dropdown';

const categorias = [
  'categoria1',
  'categoria2',
  'categoria3',
];

export default class Configuracao extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div className="page_config">
        <p ref={this.ref} />
        <div className="content">
          <div className="campo">
            <p>Categoria:</p>
            <Dropdown options={categorias} />
          </div>
          <div className="campo">
            <p>Dificuldade:</p>
            <Dropdown options={categorias} />
          </div>
          <div className="campo">
            <p>Tipo:</p>
            <Dropdown options={categorias} />
          </div>
        </div>
      </div>
    );
  }
}
