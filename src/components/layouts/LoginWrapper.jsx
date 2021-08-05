import React from "react";
import PropTypes from "prop-types";
import "./Styles/Styles.scss";

const LoginWrapper = ({ children }) => (
  <div className="loginWrapper">{children}</div>
);

LoginWrapper.defaultProps = {};

LoginWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginWrapper;
