import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import FormContent from "./FormContent";

const FormWrapper = () => {
  const handleSubmit = () => alert("Form submitted");

  return (
    <>
      <Typography>Service B Form using Formik 2 & MUI5</Typography>
      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        <FormContent />
      </Formik>
    </>
  );
};

export default FormWrapper;
