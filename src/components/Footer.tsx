import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  color: white;
  background-color: #030303;
  border-top: 1px solid black;
  height: 80px;
  text-align: left;
`;

const FooterComponent = (): ReactElement => (
  <Footer>
    <p style={{ padding: 10 }}>@Coypright 2022</p>
  </Footer>
)

export default FooterComponent;
