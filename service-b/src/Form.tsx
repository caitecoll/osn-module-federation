import MUIButton from "@mui/material/Button";
import { Formik } from "formik";

const Button = () => {
  const handleSubmit = () => alert("Form submitted");

  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
      <MUIButton>Service B - MUI5</MUIButton>
    </Formik>
  );
};

export default Button;
