import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import CellComponent from '../components/CellComponent';
import { UserEnum, Users } from '../components/UsersForm';
import { GameStatus } from './Game';

type BoardContainerProps = {
  users: Users,
  gameStatus: string,
};
type BoardComponentProps = {
  disabled: boolean
}
const Board = styled.div<BoardComponentProps>`
  background-color: #fafafa;
  opacity: ${({ disabled }) => disabled ? 0.7 : 1}
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;

const initBoard = (size: number): Array<Array<UserEnum | undefined>> => {
  const board: Array<Array<UserEnum | undefined>> = [];
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      board[i] ? board[i].push(undefined) : board[i] = [undefined];
    }
  }
  return board;
}

const getNextPlayer = (last: UserEnum) => last === UserEnum.cross ? UserEnum.circle : UserEnum.cross;

const BoardContainer = ({ users, gameStatus }: BoardContainerProps) => {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(initBoard(size));
  const [last, setLast] = useState(UserEnum.circle);

  const isBoardDisabled = gameStatus !== GameStatus.started;

  const handleClick = (row: number, col: number) => () => {
    const next = getNextPlayer(last);
    // we dont allow edition
    if (board[row][col] || isBoardDisabled) return;
    
    setBoard((state) => {
      state[row][col] = next;
      return [ ...state ]
    });
    setLast(next);
  };

  return (
    <Board disabled={isBoardDisabled}>
      {board.map((row, indexRow) => (
        <Row key={indexRow}>
          {row.map((cell, indexCol) => <CellComponent key={`${indexCol}-cell`} value={cell} onClick={handleClick(indexRow, indexCol)} />)}
        </Row>
      ))}
    </Board>
  )
}

export default BoardContainer;
