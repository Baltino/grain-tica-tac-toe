import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  background: #00b96c;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px;
  &:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #33d994;
    background-color: #33d994;
  }
`;

export default Button;

