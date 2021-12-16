import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/header';

const DashboardRoute = lazy(() => import('@logrhythm/dashboard/route'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route path="/products" render={() => <h2>Products...</h2>} />
          <Route path="/pricing" render={() => <h2>Pricing...</h2>} />
          <Route path="/blog" render={() => <h2>Blog...</h2>} />
          <Route path="/dashboard" component={DashboardRoute} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
