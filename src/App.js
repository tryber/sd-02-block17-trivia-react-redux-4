import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Game from './Pages/Game';
import FeedBack from './Pages/Feedback';
import Configuracao from './Pages/Configuracao';
import Ranking from './Pages/Ranking';
import NotFound from './Pages/NotFound';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/feedback" component={FeedBack} />
          <Route exact path="/settings" component={Configuracao} />
          <Route exact path="/ranking" component={Ranking} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
