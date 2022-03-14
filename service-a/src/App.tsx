import Typography from "@mui/material/Typography";
import React from "react";

// @ts-ignore
const RemoteButton = React.lazy(() => import("serviceB/Button"));
// @ts-ignore
const RemoteAnimalList = React.lazy(() => import("serviceB/AnimalList"));

const App = () => (
  <div>
    <Typography variant="h4">Basic Host-Remote</Typography>
    <Typography variant="h5">Service A</Typography>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <React.Suspense fallback="Loading Animal List">
      <RemoteAnimalList />
    </React.Suspense>
  </div>
);

export default App;
