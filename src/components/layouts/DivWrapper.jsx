import React from "react";
import PropTypes from "prop-types";
import "./Styles/DivWrapper.scss";

const DivWrapper = ({ children }) => (
  <div className="divWrapper">{children}</div>
);

DivWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DivWrapper;
