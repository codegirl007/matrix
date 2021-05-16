import React from "react";
import styled from "styled-components";
import { StyledInput } from "../guessForm/GuessForm";

const InnerDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: #404040;
  display: flex;
  letter-spacing: 0.2em;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & > div {
    color: #fff;
    width: 100%;
    font-size: 1.7rem;
    text-align: center;
    line-height: 1.7em;
  }
`;

const CounterInput = styled(StyledInput)`
  background-color: #fff;
  height: 150px;
  width: 150px;
  font-size: 6em;
`;

export const GuessCounter = (props) => {
  return (
    <>
      <InnerDiv>
        <div>
          Guess
          <br /> counter:{" "}
        </div>
        <CounterInput
          value={props.guessCounter}
          type="number"
          readonly="readonly"
        />
      </InnerDiv>
    </>
  );
};
