import React from 'react';

const ButtonComponents = ({ tipo, onClick }) => {
  const buttonStyles = {
    ADD: { backgroundColor: 'green'},
    SUBSTRACT: { backgroundColor: 'red' },
    CLEAR: { backgroundColor: 'yellow' },
  };

  return (
    <button style={buttonStyles[tipo]} onClick={onClick}>
      {tipo}
    </button>
  );
};

export default ButtonComponents;