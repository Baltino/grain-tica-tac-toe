import React, { ReactElement, useState } from 'react';
import UsersFormComponent, { Users } from '../components/UsersForm';

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
      
    </>
  )
}

export default GameContainer;
