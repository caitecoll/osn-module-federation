import { Button, InputLabel, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Field, Form, Formik } from "formik";
import React, { FC } from "react";

// @ts-ignore
const RemoteButton = React.lazy(() => import("serviceB/Button"));
// @ts-ignore
const RemoteAnimalList = React.lazy(() => import("serviceB/AnimalList"));
// @ts-ignore
const RemoteForm = React.lazy(() => import("serviceB/Form"));

const App = () => (
  <div>
    <Typography variant="h4">Basic Host-Remote</Typography>
    <Typography variant="h5">Service A</Typography>
    <Button>Service A - MaterialUI 4</Button>
    <ExampleForm />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <React.Suspense fallback="Loading Form">
      <RemoteForm />
    </React.Suspense>
    <React.Suspense fallback="Loading Animal List">
      <RemoteAnimalList />
    </React.Suspense>
  </div>
);

export default App;

const ExampleForm: FC = () => {
  const handleSubmit = (values: any) => {
    console.log(`color: ${values.color}`);
  };

  return (
    <Formik initialValues={{ color: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="color">
          {({ field }: any) => (
            <>
              <InputLabel>Favorite color</InputLabel>
              <TextField {...field} />
            </>
          )}
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
