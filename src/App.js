import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';

import { PrivateRoute } from './components';
import { Main, Login, Register } from './pages';

function App() {
  return (
    <div className="App">
      <h1>Battle Judging</h1>
      <div>
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect path="*" to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
