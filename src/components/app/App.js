import React, { useState, useMemo } from "react";
import { WinningScreen } from "../winningScreen/WinningScreen";
import { Alert } from "./alert/Alert";
import "./App.css";
import { GuessCounter } from "./guessCounter/GuessCounter";
import { GuessForm } from "./guessForm/GuessForm";
import { HowToPlaySection } from "./howToPlaySection/HowToPlaySection";
import { SecretNumberSection } from "./secretNumberSection/SecretNumberSection";

export const App = () => {
  //define useState: initial states and setStates
  const [gameCount, setGameCount] = useState(1);
  const [guessCounter, setGuessCounter] = useState(0);
  const [value, setValue] = useState(null);

  // getting random number
  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  //memorize random number and guessed numbers
  const randomNumber = useMemo(() => getRandomNumber(0, 100), [gameCount]);
  const guessedNumbers = useMemo(() => [], [gameCount]);

  //define messages
  const welcomeMessage = "Let's play!";
  const winningMessage = "Congratulations! You are the Oracle!";
  const tooLowMessage = "Too low!";
  const tooHighMessage = "Too high!";

  //get input from user
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  // submit form and get guessed number
  function handleGuess(e) {
    e.preventDefault();
    const guessedNumber = Number(value);
    guessedNumbers.push(guessedNumber);
    setValue("");
    setGuessCounter((prev) => prev + 1);
  }

  //define last guessed number
  const lastGuessedNumber = guessedNumbers.length
    ? guessedNumbers[guessedNumbers.length - 1]
    : null;

  // compare guessed and random numbers and show proper message
  const getMessage = () => {
    if (guessedNumbers.length === 0) {
      return welcomeMessage;
    } else if (lastGuessedNumber < randomNumber) {
      return tooLowMessage;
    } else if (lastGuessedNumber > randomNumber) {
      return tooHighMessage;
    }
    return winningMessage;
  };

  //define minValue and maxValue
  const lowerNumbers = guessedNumbers.filter((number) => number < randomNumber);
  const minValue = lowerNumbers.length > 0 ? Math.max(...lowerNumbers) : 0;

  const higherNumbers = guessedNumbers.filter(
    (number) => number > randomNumber
  );
  const maxValue = higherNumbers.length ? Math.min(...higherNumbers) : 100;

  //define winning state
  const hasWon = getMessage() === winningMessage;

  //restart
  const restart = (e) => {
    setGameCount(gameCount + 1);
    setGuessCounter(0);
  };

  return (
    <>
      {hasWon ? (
        <WinningScreen restart={restart} guesses={guessCounter} />
      ) : (
        <div className="app">
          <div className="wrapper">
            <Alert message={getMessage()} />
            <header className="header">
              <h1 id="headline">
                Ca<span>N</span> you gu<span>E</span>ss the mysteri
                <span>O</span>us number?
              </h1>
            </header>

            <div className="main">
              <HowToPlaySection />
              <SecretNumberSection
                value={value}
                minValue={minValue}
                maxValue={maxValue}
              />
            </div>

            <div className="guessPanel">
              <GuessForm
                value={value}
                onChangedValue={handleChangeValue}
                handleFormGuess={handleGuess}
              />
            </div>
          </div>

          <div
            className="countPanel"
            style={{ backgroundImage: `url(${"./images/numbers.jpg"})` }}
          >
            <GuessCounter guessCounter={guessCounter} />
          </div>
        </div>
      )}
    </>
  );
};
