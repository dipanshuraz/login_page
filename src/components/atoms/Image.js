import * as React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Img = styled.img`
  display: block;
  transform: scale(1.2);
  vertical-align: ${(props) => props.align};
  margin: ${(props) => props.margin};

  ${(props) =>
    props.cover &&
    `
      object-fit: cover;
      object-position: ${props.position || 'center'};
      height: 100%;
    `}
`;

const Image = ({ cover, url, position, align, margin }) => (
  <Img
    src={url}
    cover={cover}
    position={position}
    align={align}
    margin={margin}
  />
);

Image.defaultProps = {
  cover: '',
  url: '#',
  position: '',
  align: '',
  margin: '',
};

Image.propTypes = {
  cover: PropTypes.string,
  url: PropTypes.string,
  position: PropTypes.string,
  align: PropTypes.string,
  margin: PropTypes.string,
};

export default Image;
