import React from "react";
import PropTypes from "prop-types";
import loginJSON from "../../json/login.json";

// components

// organisms
import Form from "../organisms/Form";

// templates
import ContainerWrapper from "../layouts/ContainerWrapper";
import LoginWrapper from "../layouts/LoginWrapper";

const Login = ({ authSuccess }) => {
  const {
    formJSON,
    initialForm,
    switchLink,
    switchLinkKey,
    switchText,
    formHeaderTitle,
    buttonText,
  } = loginJSON;
  return (
    <ContainerWrapper>
      <LoginWrapper>
        <Form
          formHeaderTitle={formHeaderTitle}
          switchLinkKey={switchLinkKey}
          switchText={switchText}
          switchLink={switchLink}
          formJSON={formJSON}
          initialForm={initialForm}
          authSuccess={authSuccess}
          buttonText={buttonText}
        />
      </LoginWrapper>
    </ContainerWrapper>
  );
};

Login.defaultProps = {};

Login.propTypes = {
  authSuccess: PropTypes.func.isRequired,
};

export default Login;
