import React, { useEffect, useState } from 'react';
import UsersFormComponent, { Users } from '../components/UsersForm';
import BoardContainer from './Board';

export enum GameStatus {
  initial = 'initial',
  errorNames = 'errorNames',
  started = 'started',
  finished = 'finished'
}
const USERS_KEY = 'USERS_KEY';

const GameContainer = () => {
  const [users, setUsers] = useState<Users>({ circle: '', cross: '' });
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.initial);

  const handleSubmitNames = (users: Users) => {
    // some basic validation
    if (users.circle?.length > 3 && users.cross?.length > 3) {
      setUsers(users);
      setGameStatus(GameStatus.started);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }else {
      setGameStatus(GameStatus.errorNames)
    }
  }

  useEffect(() => {
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
      console.log("users loaded", JSON.parse(users))
      setUsers(JSON.parse(users));
    }
  }, []);


  return (
    <>
      <UsersFormComponent preloaded={users} onSubmitNames={handleSubmitNames} gameStatus={gameStatus} />
      <BoardContainer users={users} gameStatus={gameStatus} />
    </>
  )
}

export default GameContainer;
