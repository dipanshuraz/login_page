import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

// components
// atoms
import InputField from '../atoms/InputField/InputField';
import StyledButton from '../atoms/Button/StyledButton';

// templates
import ContainerWrapper from '../templates/ContainerWrapper';
import LoginWrapper from '../templates/LoginWrapper';

// assets
import UserIconImage from '../../assets/user.png';

const SignupHeader = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserIcon = styled.img`
  vertical-align: middle;
  transform: scale(1.2);
  display: block;
  margin-bottom: 1.25rem;
`;

const SignupHeading = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.3px;
`;

const SignupForm = styled.form`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Input = styled.input`
//   background: #dadada;
//   width: 100%;
//   border: none;
//   outline: none;
//   padding: 0.75rem 1rem;
//   margin: 0.5rem 0rem;
//   border-radius: 0.5rem;
// `;

// const SignupButton = styled.button`
//   display: block;
//   margin-top: 0.75rem;
//   width: 100%;
//   background: #1877f2;
//   border: none;
//   outline: none;
//   font-family: inherit;
//   font-weight: 600;
//   font-size: 1.25rem;
//   color: #ffffff;
//   padding: 0.75rem 0;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   opacity: 0.95;

//   &:hover {
//     opacity: 1;
//   }
// `;

const AuthSwitchContainer = styled.div`
  width: 100%;
  background: #dadada;
  padding: 1.5rem 0;
  display: grid;
  place-items: center;
`;

const AuthSwitchText = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
`;

const AuthSwitchLink = styled(Link)`
  color: #1877f2;
  font-size: 0.95rem;
  text-decoration: none;
  padding-left: 0.5rem;
  font-weight: 600;
`;

const Signup = () => (
  <ContainerWrapper>
    <LoginWrapper>
      <SignupHeader>
        <UserIcon src={UserIconImage} alt="User" />
        <SignupHeading>Sign Up</SignupHeading>
      </SignupHeader>
      <SignupForm>
        <InputField type="text" placeholder="Full Name" autoComplete="false" />
        <InputField type="email" placeholder="E-mail" autoComplete="false" />
        <InputField
          type="password"
          placeholder="Password"
          autoComplete="false"
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          autoComplete="false"
        />
        <StyledButton>Sign Up</StyledButton>
      </SignupForm>
      <AuthSwitchContainer>
        <AuthSwitchText>
          Already have an account?
          <AuthSwitchLink to="/login">Sign in</AuthSwitchLink>
        </AuthSwitchText>
      </AuthSwitchContainer>
    </LoginWrapper>
  </ContainerWrapper>
);

export default Signup;
