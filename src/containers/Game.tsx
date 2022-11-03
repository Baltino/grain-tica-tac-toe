import React, { useState } from 'react';
import UsersFormComponent, { Users } from '../components/UsersForm';
import BoardContainer from './Board';

export enum GameStatus {
  initial = 'initial',
  errorNames = 'errorNames',
  started = 'started',
  finished = 'finished'
}

const GameContainer = () => {
  const [users, setUsers] = useState<Users>({ circle: '', cross: '' });
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.initial);

  const handleSubmitNames = (users: Users) => {
    console.log("users", users)
    // some basic validation
    if (users.circle?.length > 3 && users.cross?.length > 3) {
      setUsers(users);
      setGameStatus(GameStatus.started);
    }else {
      setGameStatus(GameStatus.errorNames)
    }
  }

  return (
    <>
      <UsersFormComponent onSubmitNames={handleSubmitNames} gameStatus={gameStatus} />
      <BoardContainer users={users} gameStatus={gameStatus} />
    </>
  )
}

export default GameContainer;
