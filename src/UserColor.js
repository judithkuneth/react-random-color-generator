import React, { useState } from 'react';
import randomColor from 'randomcolor';

// randomColor({
//   hue: '',
//   luminosity: '',
// });

export default function UserColor() {
  const [userColor, setUserColor] = useState(randomColor({}));

  return (
    <>
      {/* <h1 style={{ color: userColor }}>Hey you!</h1> */}
      or enter a Hex Code:
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
      {/* <a
        style={{ color: userColor }}
        href="https://www.example.com"
      >
        This is a Link
      </a> */}
    </>
  );
}
