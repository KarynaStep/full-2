import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateOneUser } from "../../store/usersSlice";
import {updateUserSchema } from "../../utils/validationSchemas";
import FormForUser from "../FormForUser/FormForUser";


const UserUpdate = () => {
  const { idUser } = useParams();
  const dispatch = useDispatch();
 
  const submit = (values, formikBag) => {
   
      let filteredObj = {};

      for (let key in values) {
        if (values[key] !== "" || values[key] === true) {
          filteredObj[key] = values[key];
        }
      }
    
    dispatch(updateOneUser([idUser, filteredObj]));
    formikBag.resetForm();
  };

  return <FormForUser submit={submit} schema={updateUserSchema} />;
};

export default UserUpdate;
