import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import QuoteForm from './QuoteForm';
import QuoteResult from './QuoteResult';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={QuoteForm} />
        <Route path="/result" component={QuoteResult} />
      </Switch>
    );

    return (
      <div className="App px-5">
          {routes}
      </div>
    )
  }
}

export default App;
