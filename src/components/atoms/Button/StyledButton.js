import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Button = styled.button`
  display: block;
  margin-top: 0.75rem;
  width: 100%;
  background: #1877f2;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  padding: 0.75rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: 0.95;

  &:hover {
    opacity: 1;
  }
`;

/* eslint no-unused-vars : "off" */
const StyledButton = ({ children, classes, onClick, ...props }) => (
  <Button type="button" onClick={onClick} className={classes}>
    {children}
  </Button>
);

StyledButton.defaultProps = {
  fullWidth: false,
  classes: '',
  onClick: () => {},
};

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export default StyledButton;
