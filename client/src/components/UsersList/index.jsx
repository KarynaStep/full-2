import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delUser, getUsers } from '../../store/usersSlice';

const UsersList = () => {
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handelDelete = (id) => {
    dispatch(delUser(id))
  }
  useEffect(() => {
    dispatch(getUsers()); // eslint-disable-next-line
  }, []);
  
  const mapUsers = (user) => (
    <li key={user.id}>
      {user.email}
      <Link to={`/users/${user.id}`}> profile</Link>
      <button onClick={() => handelDelete(user.id)}>delete</button>
    </li>
  );
  return (
    <>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && <ul>{users.map(mapUsers)}</ul>}
    </>
  );
};

export default UsersList;
