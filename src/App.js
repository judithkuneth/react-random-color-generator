import React from 'react';
// import logo from './logo.svg';
import './App.css';
import RandomColor from './RandomColor';
import YourColor from './YourColor';
import UserColor from './UserColor';

let GitHub = 'https://github.com/judithkuneth';

function App() {
  return (
    <header className="App-header">
      {/* <RandomColor /> */}
      <YourColor />
      <UserColor />
      <p>
        This is my first React App :) <p></p>Check out my other
        <a
          style={{ color: 'white' }}
          href="https://www.github.com/judithkuneth"
        >
          {' '}
          Projects
        </a>
      </p>
    </header>
  );
}

export default App;
