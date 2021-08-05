import React from "react";
import PropTypes from "prop-types";
import "./Styles/LoginWrapper.scss";

const LoginWrapper = ({ children }) => (
  <div className="loginWrapper">{children}</div>
);

LoginWrapper.defaultProps = {};

LoginWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginWrapper;
