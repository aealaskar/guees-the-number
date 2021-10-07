import React from "react";

export default function Input(props) {
  return (
    <div>
      <input
        onChange={(e) => props.setNumber(e.target.value)}
        placeholder="Take a Guess"
      ></input>
      <button onClick={props.numberChecker}>Check</button>
      <h5>Attempts Left {props.attempts}</h5>
      <h5> {props.message} </h5>
      <button className="reset" onClick={props.playAgain}>
        Play Again
      </button>
    </div>
  );
}
