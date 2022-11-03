import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import UsersFormComponent, { Users } from '../components/UsersForm';
import BoardContainer from './Board';

export enum GameStatus {
  initial = 'initial',
  errorNames = 'errorNames',
  started = 'started',
  reseted = 'reseted',
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

  const handleReset = () => {
    setGameStatus(GameStatus.reseted);
  }

  useEffect(() => {
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
      console.log("users loaded", JSON.parse(users))
      setUsers(JSON.parse(users));
    }
  }, []);


  return (
    <Container direction="column" align="center">
      <UsersFormComponent
        preloaded={users}
        onSubmitNames={handleSubmitNames}
        gameStatus={gameStatus}
        onResetBoard={handleReset}  
      />
      <BoardContainer users={users} gameStatus={gameStatus} />
    </Container>
  )
}

export default GameContainer;
