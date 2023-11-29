import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   birthday: "",
//   isMale: false,
//   avatar: "",
// };

const FormForUser = (props) => {
  const { initialValues, submit, schema } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={schema}
    >
      {(formikProps) => {
        const handleAvatar = ({ target }) => {
          formikProps.setFieldValue('avatar', target.files[0]);
        };
        return (
          <Form encType="multipart/form-data">
            <label>
              <span>first name:</span>
              <Field name="firstName" />
              <ErrorMessage name="firstName" />
            </label>
            <label>
              <span>last name:</span>
              <Field name="lastName" />
              <ErrorMessage name="lastName" />
            </label>
            <label>
              <span>email:</span>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </label>
            <label>
              <span>password:</span>
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
            </label>
            <label>
              <span>birthday:</span>
              <Field name="birthday" type="date" />
              <ErrorMessage name="birthday" />
            </label>
            <label>
              <span>male:</span>
              <Field name="isMale" type="checkbox" />
              <ErrorMessage name="isMale" />
            </label>
            <label>
              <span>avatar:</span>
              <input name="avatar" type="file" onChange={handleAvatar} />
            </label>
            <button type="submit">send</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormForUser;
