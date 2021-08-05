import React from "react";
import PropTypes from "prop-types";
import "./Styles/FormHeader.scss";
// components
// atoms
import Text from "../atoms/Text";
import Image from "../atoms/Image";

import UserIconImage from "../../assets/user.png";

const FormHeader = ({ text }) => (
  <div className="loginHeader">
    <Image url={UserIconImage} margin="0 0 1.25rem 0" />
    <Text
      tag="span"
      color="black"
      size="body"
      text={text}
      align="center"
      bold
    />
  </div>
);

FormHeader.defaultProps = {
  text: "",
};

FormHeader.propTypes = {
  text: PropTypes.string,
};

export default FormHeader;
