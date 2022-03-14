import React from 'react';

// @ts-ignore
const RemoteButton = React.lazy(() => import('serviceB/Button'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
