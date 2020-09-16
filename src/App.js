import React from 'react';
import YourColor from './YourColor';
import UserColor from './UserColor';

function App() {
  return (
    <>
      <YourColor />
      <UserColor />
      <p>
        This is my first React App
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
