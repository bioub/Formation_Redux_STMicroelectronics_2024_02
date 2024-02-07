import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllUsers } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, usersSelector } from '../store/slices/users-slice';

export default function UsersList() {
  const { items: users, loading, errorMessage } = useSelector(usersSelector);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchUsers());
    // getAllUsers()
    //   .then((data) => setUsers(data))
    //   .catch((err) => setErrorMessage(err.message))
    //   .finally(() => setLoading(false));
  }, [getAllUsers]);

  return (
    <div className="UsersList">
      {errorMessage && <p>{errorMessage}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <Link to={String(user.id)}>{user.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
