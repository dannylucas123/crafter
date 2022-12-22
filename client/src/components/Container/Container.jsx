import React from 'react';
import './container.scss';

const Container = ({
  children,
  nodeContainer,
  ...rest
}) => {
  const classes = ['container'];
  if (nodeContainer) classes.push('node-container');
  return (
    <div className={classes.join(' ')} {...rest}>
      {children}
    </div>
  );
};

export default Container;
