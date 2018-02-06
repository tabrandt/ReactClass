import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputArea from './InputArea';
import Header from './Header'

const App = props => (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <InputArea /> 
      </div>
  )

export default App;
