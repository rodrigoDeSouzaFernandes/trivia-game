import React from 'react';
import { Route, Switch } from 'react-router';
import Provider from './Context/Provider';

import Login from './Pages/Login'

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
