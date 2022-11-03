import React from 'react';
import styled from 'styled-components';


type ContainerProps = {
  direction?: string,
  align?: string,
  width?: string
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  width: ${({ width }) => width};
`;

export default Container;
