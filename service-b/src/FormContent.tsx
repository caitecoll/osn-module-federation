import { FormControl, InputLabel, TextField } from "@mui/material";
import MUIButton from "@mui/material/Button";
import { Field, FieldProps, Form, useFormikContext } from "formik";

const FormContent = () => {
  const { setFieldValue } = useFormikContext();

  const handleSetAgeClick = () => setFieldValue("age", 35);

  return (
    <Form>
      <FormControl fullWidth>
        <Field name="name">
          {({ field }: FieldProps) => (
            <>
              <InputLabel htmlFor="name">Name</InputLabel>
              <TextField id="name" variant="outlined" autoFocus {...field} />
            </>
          )}
        </Field>
      </FormControl>
      <MUIButton type="button" onClick={handleSetAgeClick}>
        Set age
      </MUIButton>
      <FormControl>
        <Field name="age">
          {({ field }: FieldProps) => (
            <>
              <InputLabel htmlFor="age">Age</InputLabel>
              <TextField id="age" variant="outlined" {...field} />
            </>
          )}
        </Field>
      </FormControl>

      <MUIButton>Submit</MUIButton>
    </Form>
  );
};

export default FormContent;
