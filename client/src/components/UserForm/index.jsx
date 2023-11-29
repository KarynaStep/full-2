import React from "react";
import { useDispatch } from "react-redux";
import { userSchema } from "../../utils/validationSchemas";
import { addUser } from "../../store/usersSlice";
import FormForUser from "../FormForUser/FormForUser";

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  birthday: '',
  isMale: false,
  avatar: '',
};

const UserForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(addUser(values));
  };

  return (
    <FormForUser
      initialValues={initialValues}
      submit={onSubmit}
      schema={userSchema}
    />
  );
  
};

export default UserForm;
