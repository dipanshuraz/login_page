import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 35%;
  background: #ffffff;
  border-radius: 0.5rem;
  padding-top: 2rem;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.5);
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 45%;
  }

  @media (max-width: 1000px) {
    width: 55%;
  }

  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const LoginWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

LoginWrapper.defaultProps = {};

LoginWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginWrapper;
