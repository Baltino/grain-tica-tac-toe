import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 0px;
  margin-bottom: 10px;
  flex: 3;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2C3E50;
  font-size: 13px;
  &:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00b96c;
    outline-width: 0;
    transition: All 0.5s ease-in;
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-gap: 3px;
  align-items: center;
  label {
    flex: 2;
  }
`;

type TextFieldProps = {
  label: string,
  onChange: { (value: string): void },
  value: string,
  type?: string,
  style?: any
};

const TextFieldComponent = ({ label, onChange, value = '', ...rest }: TextFieldProps) => {
  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value);

  return (
    <InputContainer>
      {label ? <label>{label}</label> : <></>}
      <Input type="text" value={value} onChange={handleOnChange} {...rest} />
    </InputContainer>
  )
};

export default TextFieldComponent;

