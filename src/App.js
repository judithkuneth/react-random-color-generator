import React from 'react';
// import logo from './logo.svg';
import RandomColor from './RandomColor';
import YourColor from './YourColor';
import UserColor from './UserColor';

let GitHub = 'https://github.com/judithkuneth';

function App() {
  return (
    <>
      <YourColor />
      <UserColor />
      <p>
        This is my first React App :)
        <br></br>Check out my other
        <a
          style={{ color: 'black' }}
          href="https://www.github.com/judithkuneth"
        >
          {' '}
          Projects
        </a>
      </p>
    </>
  );
}

export default App;
