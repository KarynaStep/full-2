import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../store/usersSlice';
import { getUserTasks } from '../../store/tasksSlice';
import CONSTANTS from '../../constants';
import UserUpdate from '../UserUpdate';

const UserProfile = () => {
  const { idUser } = useParams();
  const dispatch = useDispatch();
  const {
    error: usersError,
    isFetching: usersIsFetching,
    currentUser,
  } = useSelector((store) => store.users);
  const {
    error: tasksError,
    isFetching: tasksIsFetching,
    tasks,
  } = useSelector((store) => store.tasks);
  useEffect(() => {
    dispatch(getUser(idUser));
  }, [idUser, dispatch]);
  const handleShowTasks = () => {
    dispatch(getUserTasks({id: idUser}))
  }
  return (
    <>
      {usersError && <p>{usersError}</p>}
      {usersIsFetching && <p>Loading...</p>}
      {!usersError && !usersIsFetching && currentUser && (
        <article>
          <p>UserProfile id: {idUser}</p>
          <p>Email: {currentUser.email}</p>
          <p>First name: {currentUser.firstName} </p>
          <p>Last name: {currentUser.lastName} </p>
          <p>Birthday: {currentUser.birthday} </p>
          {currentUser.avatar && (
            <img
              width={100}
              src={`${CONSTANTS.IMAGE_PATH}/${currentUser.avatar}`}
              alt={currentUser.avatar}
            />
          )}
          <section>
            <button onClick={handleShowTasks}>show tasks</button>
            {tasksError && <p>{tasksError}</p>}
            {tasksIsFetching && <p>Loading...</p>}
            {!tasksError && !tasksIsFetching && tasks && (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>{task.content}</li>
                ))}
              </ul>
            )}
          </section>
          <UserUpdate currentUser={currentUser} />
        </article>
      )}
    </>
  );
};

export default UserProfile;
