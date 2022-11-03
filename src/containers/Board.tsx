import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CellComponent from '../components/CellComponent';
import Container from '../components/Container';
import TextFieldComponent from '../components/TextField';
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

const BOARD_KEY = 'BOARD_KEY';
const BOARD_LAST = 'BOARD_LAST';

const getNextPlayer = (last: UserEnum) => last === UserEnum.cross ? UserEnum.circle : UserEnum.cross;

const saveBoardData = (board: Array<Array<UserEnum | undefined>>, next: UserEnum) => {
  localStorage.setItem(BOARD_KEY, JSON.stringify(board));
  localStorage.setItem(BOARD_LAST, next);
}

const BoardContainer = ({ users, gameStatus }: BoardContainerProps) => {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(initBoard(size));
  const [last, setLast] = useState(UserEnum.circle);

  const isBoardDisabled = gameStatus !== GameStatus.started;

  const handleClick = (row: number, col: number) => () => {
    const next = getNextPlayer(last);
    // we dont allow edition
    if (board[row][col] || isBoardDisabled) return;
    
    const newBoard = [ ...board ];
    newBoard[row][col] = next;

    setBoard(newBoard);
    setLast(next);
    // saving data
    saveBoardData(newBoard, next);
  };

  const handleSizeChange = (value: string) => setSize(parseInt(value));  

  useEffect(() => {
    //when mount, let's get what is in local storage.
    const board = localStorage.getItem(BOARD_KEY);
    const last = localStorage.getItem(BOARD_LAST) as UserEnum;
  
    if (board) setBoard(JSON.parse(board));
    if (last) setLast(last);  
  }, [])

  useEffect(() => {
    if (gameStatus === GameStatus.reseted) {
      const initialBoard = initBoard(size);
      setBoard(initialBoard);
      setLast(UserEnum.circle);

      saveBoardData(initialBoard, UserEnum.circle);
    }
  }, [gameStatus]);

  useEffect(() => {
    setBoard(initBoard(size));
  }, [size])

  return (
    <Container width='100%' direction='column' align='center'>
      <Container width='100%'>
        <TextFieldComponent
          label='Size'
          type='number'
          value={`${size}`}
          onChange={handleSizeChange}
          style={{ width: '100%' }}
        />
      </Container>
      <Board disabled={isBoardDisabled}>
        {board.map((row, indexRow) => (
          <Row key={indexRow}>
            {row.map((cell, indexCol) => <CellComponent key={`${indexCol}-cell`} value={cell} onClick={handleClick(indexRow, indexCol)} />)}
          </Row>
        ))}
      </Board>
    </Container>
  )
}

export default BoardContainer;
