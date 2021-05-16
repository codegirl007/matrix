import React from "react";
import styled from "styled-components";

const StyledAlert = styled.div`
height: 8%;
width: 100%;
position: absolute;
background-color: #00FF41;
display: flex;
justify-content: center;
align-items: center;
// display: none;
   & > p {
    color: #000;
    font-weight: 800;
    font-size: 30px;
    line-height: 130%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
   }
}
`;

export const Alert = (props) => {
  return (
    <>
      <StyledAlert>
        <p>{props.message}</p>
      </StyledAlert>
    </>
  );
};
