import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';
import getImageSource from '../../utils/image-util';

const Image = ({ path, title }) => {
  const src = getImageSource(path);
  return (
    <Figure>
      <Figure.Image alt={`${title} Image`} src={src} />
    </Figure>
  );
};

Image.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Image.defaultProps = {
  path: '',
};

export default Image;
