import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Game from './Pages/Game';
import FeedBack from './Pages/Feedback';
import Configuracao from './Pages/Configuracao';
import Ranking from './Pages/Ranking';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game-page" component={Game} />
          <Route exact path="/game-feedback" component={FeedBack} />
          <Route exact path="/game-configuration" component={Configuracao} />
          <Route exact path="/game-ranking" component={Ranking} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
