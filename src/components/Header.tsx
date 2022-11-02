import React, { ReactElement } from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
  text-align: center;
  color: #00b96c;
`;

const Header = (): ReactElement => (
  <header>
    <TitleText>Grain Tic Tac Toe</TitleText>
  </header>
)
export default Header;
