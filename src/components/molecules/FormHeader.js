import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

// components
// atoms
import Text from '../atoms/Text';
import Image from '../atoms/Image';

import UserIconImage from '../../assets/user.png';

const LoginHeader = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormHeader = ({ text }) => (
  <LoginHeader>
    <Image url={UserIconImage} margin="0 0 1.25rem 0" />
    <Text
      tag="span"
      color="black"
      size="body"
      text={text}
      align="center"
      bold
    />
  </LoginHeader>
);

FormHeader.defaultProps = {
  text: '',
};

FormHeader.propTypes = {
  text: PropTypes.string,
};

export default FormHeader;
