import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeMachine } from "./TypeMachine";
import { Button } from "../app/guessForm/GuessForm";

const WinningDiv = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5rem;
  background-color: #000;
`;
const RestartButton = styled(Button)`
  margin-top: 3rem;
  height: 150px;
  &:hover {
    border: 2px solid #00ff41;
  }
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const WinningScreen = (props) => {
  const { guesses, restart } = props;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 9000);
  }, []);

  return (
    <WinningDiv>
      <TypeMachine guesses={guesses} />
      {showButton && (
        <RestartButton type="submit" onClick={restart}>
          RESTART GAME
        </RestartButton>
      )}
    </WinningDiv>
  );
};
