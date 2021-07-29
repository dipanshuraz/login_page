import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerWrapper = (props) => {
  return <Container>{props.children}</Container>;
};

export default ContainerWrapper;
