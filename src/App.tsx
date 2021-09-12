import React, {useState} from 'react';
import './App.css';
import Home from './component/Home';
import {TotalProvider} from './component/TotalProvider';

const App = () => {
  return (
    <TotalProvider>
      <Home />
    </TotalProvider>
  );
};

export default App;

