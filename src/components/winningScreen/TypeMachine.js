import React, { useEffect, useState } from "react";
import styled from "styled-components";

// CongratulationText naming
const TextDiv = styled.div`
  font-size: 4rem;
  font-family: "Turret Road", cursive;
  color: #00ff41;
`;

export const TypeMachine = ({ guesses }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const guessWordPlurality = `guess${guesses === 1 ? "" : "es"}`;
  const typedMessage = `Congratulations, you are the Oracle. You have won in ${guesses} ${guessWordPlurality}. Restart the game.....`;

  useEffect(() => {
    if (currentIndex < typedMessage.length) {
      setTimeout(() => {
        setText(text + typedMessage[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
    }
  }, [currentIndex]);

  return <TextDiv>{text}</TextDiv>;
};
