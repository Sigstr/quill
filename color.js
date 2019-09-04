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
  blue: '76B8FF',
  error: 'D13842',
  graph_blue: '00CCFF',
  graph_pink: 'FF6EE3',
  graph_yellow: 'FFD26E',
  leaf: '75C97B',
  moss: '2E7533',
  orange: 'FFAE76',
  purple: '885FBD',
  red: 'FF8276',
  sigstr: '4aa951',
  tag_blue: '005D7D',
  tag_yellow: '856D39',
  yellow: 'FFC74C'
});

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
