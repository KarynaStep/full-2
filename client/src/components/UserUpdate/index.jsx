import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateOneUser } from '../../store/usersSlice';
import { updateUserSchema } from '../../utils/validationSchemas';
import { getUser } from '../../store/usersSlice';
import FormForUser from '../FormForUser/FormForUser';
import styles from './UserUpdate.module.scss';

const UserUpdate = () => {
  const { idUser } = useParams();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {
    error: usersError,
    isFetching: usersIsFetching,
    currentUser,
  } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUser(idUser));
  }, [idUser, dispatch]);
  
  const initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: '',
    birthday: currentUser.birthday,
    isMale: currentUser.isMale,
    avatar: currentUser.avatar,
  };


  //  const initialValues = {
  //    firstName: 'firstName20',
  //    lastName: 'lastName20',
  //    email: 'name20@gmail.com',
  //    password: '',
  //    birthday: '1981-09-19',
  //    isMale: false,
  //    avatar: ''
  //  };

  // console.dir(currentUser);
  // const initialValues = currentUser;

  const submit = (values, formikBag) => {
    console.log((values + 'values'));
    let filteredObj = {};
    for (let key in values) {
      if (values[key] !== '' || values[key] === true) {
        filteredObj[key] = values[key];
      }
    }
    console.log(filteredObj + 'filteredObj');
    dispatch(updateOneUser([idUser, filteredObj]));
    formikBag.resetForm();
  };
  const handelClick = () => setShow(!show);

  return (
    <section>
      <button className={styles.button_change} onClick={handelClick}>
        Change user information
      </button>
      {usersError && <p>{usersError}</p>}
      {usersIsFetching && <p>Loading...</p>}
      {!usersError &&
        !usersIsFetching &&
        currentUser &&
        show && (
          <section>
            <FormForUser
              initialValues={initialValues}
              submit={submit}
              schema={updateUserSchema}
            />
          </section>
        )}
    </section>
  );
};

export default UserUpdate;
