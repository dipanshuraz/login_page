import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const DivWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default DivWrapper;
