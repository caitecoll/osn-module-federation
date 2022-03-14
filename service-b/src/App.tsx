import Typography from "@mui/material/Typography";
import AnimalList from "./AnimalList";
import LocalButton from "./Button";

const App = () => (
  <div>
    <Typography variant="h4">Basic Host-Remote</Typography>
    <Typography variant="h5">Service B</Typography>
    <LocalButton />
    <AnimalList />
  </div>
);

export default App;
