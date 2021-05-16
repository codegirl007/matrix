import React from "react";
import styled from "styled-components";
import { MainSection, H2 } from "../howToPlaySection/HowToPlaySection";

const MainSection2 = styled(MainSection)``;
const Heading2 = styled(H2)``;
const SecretNumberDiv = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-size: 2rem;
    line-height: 130%;
    font-weight: bold;
    letter-spacing: 0.03em;
  }
  & > .number {
    margin: 10px;
  }
  & > .right-arrow {
    transform: rotateY(180deg);
  }
`;
const ImgDiv = styled.div`
  position: relative;
  padding: 0;
  width: 150px;
  height: 150px;
  & > img {
    width: 180px;
    height: auto;
    position: absolute;
    top: 11%;
    left: 20%;
    transform: rotate(35deg);
  }
  & > p {
    position: absolute;
    top: 28%;
    right: 33%;
    color: #00ff41;
    font-size: 3.5rem;
    font-family: "VT323", monospace;
  }
`;

export const SecretNumberSection = (props) => {
  return (
    <>
      <MainSection2>
        <Heading2>Secret Number</Heading2>
        <SecretNumberDiv>
          <p class="number">{props.minValue}</p>
          <p class="arrow">&lt;</p>
          <ImgDiv>
            <img src="./images/sunglasses.png" />
            <p>{props.value}</p>
          </ImgDiv>
          <p class="arrow right-arrow">&gt;</p>
          <p class="number">{props.maxValue}</p>
        </SecretNumberDiv>
      </MainSection2>
    </>
  );
};
