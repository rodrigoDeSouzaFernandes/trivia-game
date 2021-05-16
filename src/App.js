import React from 'react';
import { Route } from 'react-router';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Route path="/" component={Login} />

    </Provider>
  );
}

export default App;
