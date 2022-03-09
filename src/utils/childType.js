import React from 'react';

export default (props, propName, componentName, acceptedTypes) => {
  const prop = props[propName];
  let error = null;

  if (!Array.isArray(acceptedTypes)) {
    acceptedTypes = [acceptedTypes];
  }

  React.Children.forEach(prop, (child) => {
    if (!acceptedTypes.includes(child.type)) {
      error = new Error(`Invalid child of ${componentName}`);
    }
  });

  return error;
};
