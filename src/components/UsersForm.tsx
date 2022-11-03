import React, { ChangeEvent, ChangeEventHandler, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { GameStatus } from '../containers/Game';
import Button from './Button';
import InputComponent from './TextField';

const Footer = styled.footer`
  text-align: center;
  color: #00b96c;
  border-top: 1px solid black;
`;

type UsersFormProps = {
  onSubmitNames: { (usersObj: any ): void },
  gameStatus: string
}

export enum UserEnum {
  circle = 'circle',
  cross = 'cross'
}

export type Users = {
  cross: string,
  circle: string,
}

const INITIAL_STATE = { cross: '', circle: '' };

const UsersFormComponent = ({
  onSubmitNames,
  gameStatus,
}: UsersFormProps): ReactElement => {
  const [users, setUsers] = useState(INITIAL_STATE);

  const handleChangeUserName = (name: UserEnum) =>
    (value: string) => setUsers((state) => ({ ...state, [name]: value }));

  return (
    <div>
      <p>Please enter your names!</p>
      <InputComponent label={'User O'} value={users.circle} onChange={handleChangeUserName(UserEnum.circle)} />
      <InputComponent label={'User X'} value={users.cross} onChange={handleChangeUserName(UserEnum.cross)} />
      <Button onClick={() => onSubmitNames(users)}>
        Continue
      </Button>
      {gameStatus === GameStatus.errorNames && <p>Please complete the user names to proceed.</p>}
    </div>
  );
}

export default UsersFormComponent;
