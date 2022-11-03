import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GameStatus } from '../containers/Game';
import AlertText, { AlertTextTypes } from './AlertText';
import Button from './Button';
import InputComponent from './TextField';

export type Users = {
  cross: string,
  circle: string,
}

type UsersFormProps = {
  preloaded: Users,
  onSubmitNames: { (usersObj: any ): void },
  onResetBoard: { (): void },
  gameStatus: string
}

export enum UserEnum {
  circle = 'circle',
  cross = 'cross'
}

const Container = styled.div``;
const INITIAL_STATE = { cross: '', circle: '' };

const UsersFormComponent = ({
  preloaded,
  onSubmitNames,
  gameStatus,
  onResetBoard,
}: UsersFormProps): ReactElement => {
  const [users, setUsers] = useState<Users>(INITIAL_STATE);

  const handleChangeUserName = (name: UserEnum) =>
    (value: string) => setUsers((state) => ({ ...state, [name]: value }));

  useEffect(() => {
    setUsers(preloaded);
  }, [preloaded])

  return (
    <Container>
      <p>Please enter your names! (at least 4 chars long)</p>
      <InputComponent label={'User O'} value={users.circle} onChange={handleChangeUserName(UserEnum.circle)} />
      <InputComponent label={'User X'} value={users.cross} onChange={handleChangeUserName(UserEnum.cross)} />
      <div>
        <Button onClick={() => onSubmitNames(users)}>
          Continue
        </Button>
        <Button onClick={onResetBoard}>
          Reset game
        </Button>
      </div>
      {gameStatus === GameStatus.started && <AlertText type={AlertTextTypes.success}>Play!</AlertText>}
      {gameStatus === GameStatus.errorNames && <AlertText type={AlertTextTypes.error}>Please complete the user names to proceed.</AlertText>}
    </Container>
  );
}

export default UsersFormComponent;
