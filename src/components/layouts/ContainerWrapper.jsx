import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerWrapper = ({ children }) => (
  <Container>{children}</Container>
);

ContainerWrapper.defaultProps = {};

ContainerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
