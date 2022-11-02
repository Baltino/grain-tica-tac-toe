import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 1px;
`;

type InputProps = {
  label: string,
};

const InputComponent = ({ label, ...rest }: InputProps) => {
  return (
    <div>
      {label ? <label>{label}</label> : <></>}
      <Input {...rest} />
    </div>
  )
};

export default InputComponent;

