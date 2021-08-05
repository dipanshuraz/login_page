import React from "react";
import PropTypes from "prop-types";
import "./Styles/ContainerWrapper.scss";

const ContainerWrapper = ({ children }) => (
  <div className="container">{children}</div>
);

ContainerWrapper.defaultProps = {};

ContainerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerWrapper;
