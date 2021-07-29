import React from 'react';
import PropTypes from 'prop-types';

// components
// atoms

// molecules
import HomeContainer from '../molecules/HomeContainer';

// templates
import ContainerWrapper from '../templates/ContainerWrapper';
import DivWrapper from '../templates/DivWrapper';

const Home = ({ handleLogout }) => (
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

export default Home;
