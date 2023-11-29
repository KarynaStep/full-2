import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateOneUser } from '../../store/usersSlice';
import { updateUserSchema } from '../../utils/validationSchemas';
import { getUser } from '../../store/usersSlice';
import FormForUser from '../FormForUser/FormForUser';

const UserUpdate = (props) => {
  const { currentUser } = props;
  const { idUser } = useParams();
  const dispatch = useDispatch();

  // const {
  //   currentUser,
  // } = useSelector((store) => store.users);
  // useEffect(() => {
  //   dispatch(getUser(Number(idUser)));
  // }, );

  // const initialValues = getUser(Number(idUser));
  // const initialValues = dispatch(getUser(Number(idUser)));

  const initialValues = currentUser;

  const submit = (values, formikBag) => {
    let filteredObj = {};

    for (let key in values) {
      if (values[key] !== '' || values[key] === true) {
        filteredObj[key] = values[key];
      }
    }

    dispatch(updateOneUser([idUser, filteredObj]));
    formikBag.resetForm();
  };

  return (
    <>
      <FormForUser
        initialValues={initialValues}
        submit={submit}
        schema={updateUserSchema}
      />
    </>
  );
};

export default UserUpdate;
