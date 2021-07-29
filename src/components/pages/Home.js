import React from "react";
import styled from "styled-components/macro";
import ContainerWrapper from "../templates/ContainerWrapper";
import DivWrapper from "../templates/DivWrapper";

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

const LogoutButton = styled.button`
  background: none;
  outline: none;
  display: block;
  border: none;
  color: #ffffff;
  font-size: 1.25rem;
  letter-spacing: 0.3px;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
`;

const Home = ({ handleLogout }) => {
  return (
    <ContainerWrapper>
      <DivWrapper>
        <WelcomeText>Yay! You are logged in!</WelcomeText>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </DivWrapper>
    </ContainerWrapper>
  );
};

export default Home;
