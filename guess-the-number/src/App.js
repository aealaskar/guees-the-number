import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [guess, setGuess] = useState(Math.floor(Math.random() * 10 + 1));
  const [attempts, setAttempts] = useState(3);
  const [message, setMessage] = useState("");
  const difference = Math.abs(+number - guess);

  console.log("guess = ", guess);
  function playAgain() {
    document.location.reload();
  }
  function numberChecker() {
    console.log(difference, "difference");
    if (+number === guess) {
      setMessage("YOU WON!");
      return;
    } else if (attempts > 1) {
      setAttempts(attempts - 1);
      if (difference >= 5) {
        setMessage("not even close, try higher");
        if (difference <= 2) {
          setMessage("you're getting close, try again!");
        }
      } else if (difference >= 2) {
        setMessage("you're getting close, try again!");
      } else if (difference <= 2) {
        setMessage("you're getting close, try again!");
      }
    } else {
      setAttempts("0");
      setMessage("YOU LOST!");
      return;
    }

    console.log("attempts", attempts);
  }

  return (
    <div className="App">
      <h3>Guess The Number</h3>
      <h5> Guess from 1-10</h5>
      <Input
        setNumber={setNumber}
        numberChecker={numberChecker}
        setGuess={setGuess}
        attempts={attempts}
        message={message}
        playAgain={playAgain}
      />
    </div>
  );
}

export default App;
