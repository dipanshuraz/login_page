import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components

// atoms
import { InputField, Button } from "../atoms";

// assets
import UserIconImage from "../../assets/user.png";
import { FormHeader } from "../molecules";

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

export const Form = ({
  authSuccess,
  formJSON,
  initialForm,
  switchLink,
  switchText,
  formHeaderTitle,
  switchLinkKey,
  buttonText,
}) => {
  const [formState, setFormState] = useState(initialForm);
  const [authorized, setAuthorized] = useState(true);

  const submitHandle = (e) => {
    e.preventDefault();
    // console.log(formState, "formState");
    const { email, password } = formState;
    if (email === "demo@demo.com" && password === "demo") {
      authSuccess();
    } else {
      setAuthorized(false);
      setTimeout(() => {
        setAuthorized(true);
      }, [2000]);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "default" ? checked : value,
    }));
  };

  return (
    <>
      <FormHeader icon={UserIconImage} text={formHeaderTitle} />
      <LoginForm onSubmit={submitHandle}>
        {formJSON &&
          formJSON.map((elem, idx) => (
            <InputField
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              testId={elem.testId}
              type={elem.type}
              placeholder={elem.placeholder}
              value={formState[elem.name]}
              name={elem.name}
              onChange={handleChange}
            />
          ))}

        {!authorized && <ErrorMessage>Wrong credentials!</ErrorMessage>}
        <Button color="#ffffff" bg="#1877f2" onClick={submitHandle}>
          {buttonText}
        </Button>
        <MoreActionsContainer>
          <ForgotPasswordLink href="#">Forgot Password ?</ForgotPasswordLink>
        </MoreActionsContainer>
      </LoginForm>
      <AuthSwitchContainer>
        <AuthSwitchText>
          {switchText}
          <AuthSwitchLink to={switchLink}>{switchLinkKey}</AuthSwitchLink>
        </AuthSwitchText>
      </AuthSwitchContainer>
    </>
  );
};

Form.defaultProps = {
  formJSON: [],
  initialForm: {},
  authSuccess: () => {},
};

Form.propTypes = {
  authSuccess: PropTypes.func,
  formJSON: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.string.isRequired,
      testId: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  initialForm: PropTypes.objectOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
      passwordConfirm: PropTypes.string,
    }),
  ),
  switchLink: PropTypes.string.isRequired,
  switchText: PropTypes.string.isRequired,
  formHeaderTitle: PropTypes.string.isRequired,
  switchLinkKey: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
