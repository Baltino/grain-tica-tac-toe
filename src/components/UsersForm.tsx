import React, { ChangeEvent, ChangeEventHandler, ReactElement, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import InputComponent from './TextField';

const Footer = styled.footer`
  text-align: center;
  color: #00b96c;
  border-top: 1px solid black;
`;

type UsersFormProps = {
  onSubmitNames: { (usersObj: any ): void },
  submitStatus: string
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
  submitStatus,
}: UsersFormProps): ReactElement => {
  const [users, setUsers] = useState(INITIAL_STATE);

  const handleChangeUserName = (name: UserEnum) =>
    (value: string) => setUsers((state) => ({ ...state, [name]: value }));

  return (
    <form>
      <p>Please enter your names!</p>
      <InputComponent label={'User O'} value={users.circle} onChange={handleChangeUserName(UserEnum.circle)} />
      <InputComponent label={'User X'} value={users.cross} onChange={handleChangeUserName(UserEnum.cross)} />
      <Button type="submit" onClick={onSubmitNames}>
        Continue
      </Button>
    </form>
  );
}

export default UsersFormComponent;
