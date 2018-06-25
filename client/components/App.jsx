import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <Routes />
    </div>
  );
};

export default App;

