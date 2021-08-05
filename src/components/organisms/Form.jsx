import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Styles/Styles.scss";
// components

// atoms
import InputField from "../atoms/InputField";
import Button from "../atoms/Button/Button";

// assets
import UserIconImage from "../../assets/user.png";
import FormHeader from "../molecules/FormHeader";

const AuthSwitchLink = styled(Link)`
  color: #1877f2;
  font-size: 0.95rem;
  text-decoration: none;
  padding-left: 0.5rem;
  font-weight: 600;
`;

const Form = ({
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
      <form className="form" onSubmit={submitHandle}>
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

        {!authorized && (
          <p className="form__errorMessage">Wrong credentials!</p>
        )}
        <Button color="#ffffff" bg="#1877f2" onClick={submitHandle}>
          {buttonText}
        </Button>
        <div className="form__moreActionContainer">
          <a className="form__forgotPasswordLink" href="/#">
            Forgot Password ?
          </a>
        </div>
      </form>

      <div className="authSwitchContainer">
        <p className="authSwitchContainer__text">
          {switchText}
          <AuthSwitchLink to={switchLink}>{switchLinkKey}</AuthSwitchLink>
        </p>
      </div>
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

export default Form;
