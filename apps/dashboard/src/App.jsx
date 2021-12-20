import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/dashboard" render={() => <h2>Dashboard App</h2>} />
      <Route exact path="/dashboard/blog" render={() => <h2>Blog from Dashboard App</h2>} />
    </Switch>
  );
}

export default App;
