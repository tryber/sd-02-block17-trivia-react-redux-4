import React, { Component } from 'react';
import Header from './Header';
import Questions from './Questions';
import './index.css';

export default class Game extends Component {
  render() {
    return (
      <div className="game-content">
        <Header />
        <Questions />
      </div>
    );
  }
}
