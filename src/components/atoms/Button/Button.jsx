import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import "./styles.scss";

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  &:hover {
    opacity: 1;
  }
`;

/* eslint no-unused-vars : "off" */
export const Button = ({ bg, color, children, classes, onClick }) => (
  <ButtonWrapper
    color={color}
    bg={bg}
    type="button"
    onClick={onClick}
    className={`custom-button ${classes}`}>
    {children}
  </ButtonWrapper>
);

Button.defaultProps = {
  classes: "",
  onClick: () => {},
  bg: "",
  color: "",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  color: PropTypes.string,
};
