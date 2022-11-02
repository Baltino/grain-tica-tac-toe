import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  color: #00b96c;
  border-top: 1px solid black;
`;

const FooterComponent = (): ReactElement => (
  <Footer>
    @Coypright 2022
  </Footer>
)

export default FooterComponent;
