import React from 'react'

export const colors = {
  sigstr: '4aa951',
  onyx: '1B262B'
};

export const ColorBlock = ({
  hex,
  label
}) => {
  return (<div style={{
    backgroundColor: '#' + hex
  }}
  >
    {label}
  </div>
  );
};

export const ColorGroup = () => {
  return Object.entries(colors).map(([key, value]) => (<ColorBlock hex={value} label={key} />))
};