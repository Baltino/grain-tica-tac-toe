import React, { ReactElement } from 'react';
import Header from './components/Header';
import './App.css';
import FooterComponent from './components/Footer';

function App(): ReactElement {
  return (
    <div>
      <Header />
      <FooterComponent />
    </div>
  );
}

export default App;
