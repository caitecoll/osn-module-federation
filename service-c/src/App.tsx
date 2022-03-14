import Typography from "@mui/material/Typography";
import React from "react";

// @ts-ignore
const RemoteButton = React.lazy(() => import("serviceB/Button"));

const App = () => (
  <div>
    <Typography variant="h4">Basic Host-Remote</Typography>
    <Typography variant="h5">Service C</Typography>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
