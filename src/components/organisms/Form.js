import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components

// atoms
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

// assets
import UserIconImage from '../../assets/user.png';
import FormHeader from '../molecules/FormHeader';

const LoginForm = styled.form`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  font-weight: 600;
`;

const MoreActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem auto 2.5rem auto;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 45%;
`;

const RememberMeCheckbox = styled.input`
  display: inline-block;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const RememberMeLabel = styled.label`
  font-size: 0.9rem;
  cursor: pointer;
  letter-spacing: 0.2px;
  font-weight: 400;
`;

const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: #1877f2;
  letter-spacing: 0.2px;
  font-weight: 400;
  font-size: 0.9rem;
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

const Form = ({ authSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(true);

  const checkNow = (e) => {
    e.preventDefault();
    if (email === 'demo@demo.com' && password === 'demo') {
      authSuccess();
    } else {
      setAuthorized(false);
      setTimeout(() => {
        setAuthorized(true);
      }, [2000]);
    }
  };

  return (
    <>
      <FormHeader icon={UserIconImage} text="Sign In Form" />
      <LoginForm onSubmit={checkNow}>
        <InputField
          testId="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          testId="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {!authorized && <ErrorMessage>Wrong credentials!</ErrorMessage>}
        <Button color="#ffffff" bg="#1877f2" onClick={checkNow}>
          Sign In
        </Button>
        <MoreActionsContainer>
          <RememberMe>
            <RememberMeCheckbox
              type="checkbox"
              name="remember-me"
              id="rememberMe"
            />
            <RememberMeLabel htmlFor="rememberMe">Remember Me</RememberMeLabel>
          </RememberMe>
          <ForgotPasswordLink href="#">Forgot Password ?</ForgotPasswordLink>
        </MoreActionsContainer>
      </LoginForm>
      <AuthSwitchContainer>
        <AuthSwitchText>
          Don&apos;t have an account?
          <AuthSwitchLink to="/signup">Register</AuthSwitchLink>
        </AuthSwitchText>
      </AuthSwitchContainer>
    </>
  );
};

Form.defaultProps = {};

Form.propTypes = {
  authSuccess: PropTypes.func.isRequired,
};

export default Form;
