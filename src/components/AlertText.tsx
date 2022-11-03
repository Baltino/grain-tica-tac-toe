import React from 'react';
import styled from 'styled-components';

export enum AlertTextTypes {
  error = 'error',
  success = 'success'
}

type AlertTextProps = {
  type: AlertTextTypes
}

const AlertText = styled.p<AlertTextProps>`
  font-size: 11px;
  color: ${({ type }) => type === AlertTextTypes.error ? 'red' : 'green' }
`;

export default AlertText;
