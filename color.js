import React from 'react'

export const ColorBlock = ({
  hex,
  label
}) => {
  return (
    <div style={{
      width: 160,
      marginRight: 32,
      marginBottom: 48
    }}>
      <div style={{
        height: 96,
        width: 160,
        backgroundColor: '#' + hex,
        marginBottom: 12,
        borderRadius: 3
      }}>
      </div>
      <div>{label}</div>
      <div>{hex}</div>
    </div>
  );
};

const colors = ({
  onyx: '1B262B',
  basalt: '3D4D54',
  slate: '6A7173',
  tufa: 'ACB3B6',
  limestone: 'DEE1E3',
  marble: 'ECECEC',
  chalk: 'F2F4F5',
  sigstr: '4aa951'
})

export const ColorGroup = () => {
  const blocks = Object.entries(colors).map(([key, value]) => (<ColorBlock hex={value} label={key} />));
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {blocks}
    </div>
  );
};