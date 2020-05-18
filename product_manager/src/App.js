import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Details from './views/Details'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path = "/"/>
        <Details path = "/products/:id"/>
      </Router>
    </div>
  );
}

export default App;
