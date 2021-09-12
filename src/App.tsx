import React, {useState} from 'react';
import './App.css';
import Home from './component/Home';
import {TextContext, TextType} from './component/TotalProvider';

const defaultVal: TextType= {
  message: 'aaaa',
  changeText: (text) =>{ defaultVal.message = text }
}
const App = () => {
  return (
    <TextContext.Provider value={defaultVal}>
      <Home />
    </TextContext.Provider>
  );
};

export default App;

