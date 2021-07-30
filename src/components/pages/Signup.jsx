import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// components
// atoms
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

// templates
import ContainerWrapper from "../layouts/ContainerWrapper";
import LoginWrapper from "../layouts/LoginWrapper";

// assets
import UserIconImage from "../../assets/user.png";
import FormHeader from "../molecules/FormHeader";

const SignupForm = styled.form`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      <FormHeader icon={UserIconImage} text="Sign Up" />
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
        <Button color="#ffffff" bg="#1877f2">
          Sign up
        </Button>
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
