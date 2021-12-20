import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Header from './components/header';
import configureStore, { history } from './store';

const store = configureStore();
const DashboardRoute = lazy(() => import('@logrhythm/dashboard/route'));

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route path="/products" render={() => <h2>Products...</h2>} />
            <Route path="/pricing" render={() => <h2>Pricing...</h2>} />
            <Route path="/blog" render={() => <h2>Blog...</h2>} />
            <Route path="/dashboard" component={DashboardRoute} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
