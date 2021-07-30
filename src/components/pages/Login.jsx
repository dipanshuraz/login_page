import React from "react";
import PropTypes from "prop-types";

// components

// organisms
import Form from "../organisms/Form";

// templates
import ContainerWrapper from "../layouts/ContainerWrapper";
import LoginWrapper from "../layouts/LoginWrapper";

const Login = ({ authSuccess }) => (
  <ContainerWrapper>
    <LoginWrapper>
      <Form authSuccess={authSuccess} />
    </LoginWrapper>
  </ContainerWrapper>
);

Login.defaultProps = {};

Login.propTypes = {
  authSuccess: PropTypes.func.isRequired,
};

export default Login;
