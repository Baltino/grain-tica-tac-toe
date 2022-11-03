import React, { ReactElement } from 'react';
import Header from './components/Header';
import './App.css';
import GameContainer from './containers/Game';

function App(): ReactElement {
  return (
    <div>
      <Header />
      <GameContainer />
    </div>
  );
}

export default App;
