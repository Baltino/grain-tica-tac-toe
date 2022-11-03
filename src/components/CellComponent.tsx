import React, { ChangeEvent, ChangeEventHandler, MouseEventHandler, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { UserEnum } from '../components/UsersForm';

const Cell = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  display: inline-block;
  margin: 0 1px;
  cursor: pointer;
`

type CellComponentProps = {
  value?: UserEnum | undefined,
  onClick: MouseEventHandler<HTMLSpanElement
  >
}

const CellComponent = ({ value, onClick }: CellComponentProps): ReactElement => {
  return (
    <Cell onClick={onClick}>
      {value === UserEnum.circle && 'O'}
      {value === UserEnum.cross && 'X'}
    </Cell>
  )
}


export default CellComponent;
