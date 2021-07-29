import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

// components
// atoms
import StyledButton from '../atoms/Button/StyledButton';

const WelcomeText = styled.h1`
  color: #ffffff;
  font-size: 5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    font-size: 4rem;
  }

  @media (max-width: 800px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const HomeContainer = ({ handleLogout }) => (
  <>
    <WelcomeText>Yay! You are logged in!</WelcomeText>
    <StyledButton onClick={handleLogout}>Logout</StyledButton>
  </>
);

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default HomeContainer;
