import React, { ReactElement } from 'react';
import Header from './components/Header';
import './App.css';
import FooterComponent from './components/Footer';
import GameContainer from './containers/Game';

function App(): ReactElement {
  return (
    <div>
      <Header />
      <GameContainer />
      <FooterComponent />
    </div>
  );
}

export default App;
