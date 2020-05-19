import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import Edit from './views/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path = "/"/>
        <Details path = "/products/:id"/>
        <Edit path = "/product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
