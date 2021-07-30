import React from "react";
import PropTypes from "prop-types";

// components
// atoms
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const HomeContainer = ({ handleLogout }) => (
  <>
    <Text
      tag="h1"
      color="#ffffff"
      size="text2"
      margin="100px"
      text="Yay! You are logged in!"
      align="center"
    />
    <Button onClick={handleLogout}>Logout</Button>
  </>
);

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default HomeContainer;
