import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Input = styled.input`
  background: #dadada;
  width: 100%;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0rem;
  border-radius: 0.5rem;
`;

const InputField = ({ placeholder, value, onChange, classes, testId }) => (
  <Input
    type="text"
    data-testid={testId}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={classes}
  />
);

InputField.defaultProps = {
  testId: '',
  value: '',
  onChange: () => {},
  placeholder: '',
  classes: '',
};

InputField.propTypes = {
  testId: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default InputField;
