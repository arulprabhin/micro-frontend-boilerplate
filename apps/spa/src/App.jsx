import React, { lazy, Suspense } from "react";

const Dashboard = lazy(() => import('@logrhythm/dashboard/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Spa App</h1>
      <Dashboard />
    </Suspense>
  );
}

export default App;
