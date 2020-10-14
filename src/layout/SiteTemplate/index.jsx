import React from 'react';
import PropTypes from 'prop-types';

const SiteTemplate = ({ children }) => {
  return <div className="app-container">{children}</div>;
};

SiteTemplate.propTypes = {
  children: PropTypes.node,
};

SiteTemplate.defaultProps = {
  children: undefined,
};

export default SiteTemplate;
