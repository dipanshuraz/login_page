import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { colors, device, textSize, lineHeight } from '../../theme';
import respCss from '../../helper/repCSS';

const TextItem = styled.span`
  display: block;
  position: relative;
  font-size: ${(props) => textSize[props.size].mobile};
  line-height: ${(props) => lineHeight[props.size].mobile};
  font-weight: ${(props) => (props.bold ? '700' : '')};
  color: ${(props) => props.color};

  @media ${device.tablet} {
    font-size: ${(props) => textSize[props.size].tablet};
    line-height: ${(props) => lineHeight[props.size].tablet};
  }

  @media ${device.laptop} {
    font-size: ${(props) => textSize[props.size].laptop};
    line-height: ${(props) => lineHeight[props.size].laptop};
  }

  ${css`
    ${(props) => respCss('margin', props.margin)}
  `}

  ${css`
    ${(props) => respCss('text-align', props.align)}
  `}
`;

const Text = ({ bold, color, margin, size, text, tag, align }) => (
  <TextItem
    as={tag}
    size={size}
    color={color}
    margin={margin}
    align={align}
    bold={bold}>
    {text}
  </TextItem>
);

Text.defaultProps = {
  bold: false,
  tag: 'span',
  size: 'body',
  color: colors.black,
  margin: '10px',
  text: 'lorem ipsum',
  align: '',
};

Text.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  tag: PropTypes.string,
  align: PropTypes.string,
};

export default Text;
