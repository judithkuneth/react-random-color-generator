import React, { useState } from 'react';
import randomColor from 'randomcolor';
import chalk, { black } from 'chalk';

export default function RandomColor() {
  // 1. Declare a variable
  const [color, setColor] = useState(randomColor());

  //* 2. Use the variable
  return (
    <h1 style={{ color: color }}>
      <button onClick={() => setColor(randomColor())}> Click me </button>
      <div> </div>
      {color}
    </h1>
  );
}
