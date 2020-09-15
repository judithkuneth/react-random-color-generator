import React, { useState } from 'react';
import randomColor from 'randomcolor';

export default function YourColor() {
  const [inputHue, setInputHue] = useState();

  const [inputLuminosity, setInputLuminosity] = useState();

  const [yourColor, setYourColor] = useState(randomColor());

  return (
    <>
      <h1 style={{ color: yourColor }}>Hey you!</h1>
      Enter Color (red, blue, green,...)
      <br />
      <p>{inputHue}</p>
      <input
        value={inputHue}
        onChange={(event) => {
          setInputHue(event.currentTarget.value);
        }}
      ></input>
      <br />
      Enter Luminosity (dark, bright, light)
      <br />
      <p>{inputLuminosity}</p>
      <input
        value={inputLuminosity}
        onChange={(event) => {
          setInputLuminosity(event.currentTarget.value);
        }}
      ></input>
      <br />
      <button
        onClick={() =>
          setYourColor(
            randomColor({ hue: inputHue, luminosity: inputLuminosity }),
          )
        }
      >
        Get my color!
      </button>
      <h1 style={{ color: yourColor }}>
        <p> </p>
        This is a randomly {inputLuminosity} {inputHue} color: {yourColor}
      </h1>
    </>
  );
}
