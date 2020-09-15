import React, { useState } from 'react';
import randomColor from 'randomcolor';

// 0. Name a function
export default function RandomColor() {
  // 1. Declare a variable
  const [color, setColor] = useState(randomColor());

  //* 2. Use the variable
  return (
    <h1 style={{ color: color }}>
      <button onClick={() => setColor(randomColor())}>Click me</button>
      <p> </p>
      {color}
      <p>This is a random color code</p>
    </h1>
  );
}
