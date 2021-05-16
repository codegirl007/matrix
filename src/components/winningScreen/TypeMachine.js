import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TextDiv = styled.div`
  font-size: 4rem;
  font-family: "Turret Road", cursive;
  color: #00ff41;
`;

export const TypeMachine = ({ textToType, delay }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < textToType.length) {
      setTimeout(() => {
        setText(text + textToType[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);
    }
  }, [currentIndex]);

  return <TextDiv>{text}</TextDiv>;
};
