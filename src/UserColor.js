import React, { useState } from 'react';
import randomColor from 'randomcolor';

export default function UserColor() {
  const [userColor, setUserColor] = useState(randomColor({}));

  return (
    <>
      <h1 style={{ color: userColor }}>Hello again!</h1>
      You may also enter a Hex Code:
      <br />
      <br />
      <input
        value={userColor}
        onChange={(event) => {
          setUserColor(event.currentTarget.value);
        }}
      />
      <br />
      or
      <br />
      <br />
      <button onClick={() => setUserColor(randomColor())}>
        Get a random color
      </button>
      <h1 style={{ color: userColor }}>
        <p> </p>
        This is how {userColor} looks like
      </h1>
    </>
  );
}
