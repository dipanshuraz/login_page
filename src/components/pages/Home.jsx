import React from "react";
import PropTypes from "prop-types";

// components
// atoms

// molecules
import { HomeContainer } from "../molecules";

// templates
import { ContainerWrapper, DivWrapper } from "../layouts";

export const Home = ({ handleLogout }) => (
  <ContainerWrapper>
    <DivWrapper>
      <HomeContainer handleLogout={handleLogout} />
    </DivWrapper>
  </ContainerWrapper>
);

Home.defaultProps = {};

Home.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
