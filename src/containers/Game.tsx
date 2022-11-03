import React, { ReactElement, useState } from 'react';
import UsersFormComponent, { Users } from '../components/UsersForm';
import BoardContainer from './Board';

const GameContainer = () => {
  const [users, setUsers] = useState({});
  const [submitUsersStatus, setSubmitUsersStatus] = useState('initial');

  const handleSubmitNames = (users: Users) => {
    // some basic validation
    if (users.circle?.length > 3 && users.cross?.length > 3) {
      setUsers(users)
    }else {
      setSubmitUsersStatus('error');
    }
  }

  return (
    <>
      <UsersFormComponent onSubmitNames={handleSubmitNames} submitStatus={submitUsersStatus} />
      <BoardContainer users={users} gameStatus={'init'} />
    </>
  )
}

export default GameContainer;
