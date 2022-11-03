import React, { ChangeEvent, ChangeEventHandler, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GameStatus } from '../containers/Game';
import Button from './Button';
import InputComponent from './TextField';

const Footer = styled.footer`
  text-align: center;
  color: #00b96c;
  border-top: 1px solid black;
`;

export type Users = {
  cross: string,
  circle: string,
}

type UsersFormProps = {
  preloaded: Users,
  onSubmitNames: { (usersObj: any ): void },
  gameStatus: string
}

export enum UserEnum {
  circle = 'circle',
  cross = 'cross'
}


const INITIAL_STATE = { cross: '', circle: '' };

const UsersFormComponent = ({
  preloaded,
  onSubmitNames,
  gameStatus,
}: UsersFormProps): ReactElement => {
  const [users, setUsers] = useState<Users>(INITIAL_STATE);

  const handleChangeUserName = (name: UserEnum) =>
    (value: string) => setUsers((state) => ({ ...state, [name]: value }));

  useEffect(() => {
    setUsers(preloaded);
  }, [preloaded])

  return (
    <div>
      <p>Please enter your names! (at least 4 chars long)</p>
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
