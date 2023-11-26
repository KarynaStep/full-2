import React from 'react';
import { useSelector } from 'react-redux';
import UserForm from '../components/UserForm';

const RegistrationPage = () => {
  const {error, isFetching, userAuth} = useSelector((store) => store.users);
  return (
    <>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && !userAuth && <UserForm />}
      {/* {!error && !isFetching && userAuth && <p>welcome</p>} */}
    </>
  );
};

export default RegistrationPage;
