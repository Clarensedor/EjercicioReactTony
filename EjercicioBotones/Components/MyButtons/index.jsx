import React from 'react';

const ButtonComponents = ({ tipo, onClick }) => {
  const buttonStyles = {
    ADD: { backgroundColor: 'green', color: 'white' },
    SUBSTRACT: { backgroundColor: 'red', color: 'white' },
    CLEAR: { backgroundColor: 'yellow', color: 'white' },
  };

  return (
    <button style={buttonStyles[tipo]} onClick={onClick}>
      {tipo}
    </button>
  );
};

export default ButtonComponents;