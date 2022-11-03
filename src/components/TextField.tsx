import React, { ChangeEvent, ChangeEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 1px;
`;

type TextFieldProps = {
  label: string,
  onChange: { (value: string): void },
  value: string
};

const TextFieldComponent = ({ label, onChange, value = '', ...rest }: TextFieldProps) => {
  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value);

  return (
    <div>
      {label ? <label>{label}</label> : <></>}
      <Input type="text" value={value} onChange={handleOnChange} {...rest} />
    </div>
  )
};

export default TextFieldComponent;

