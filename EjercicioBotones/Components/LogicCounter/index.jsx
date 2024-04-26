import React, { useState } from 'react';
import ButtonComponents from '../MyButtons/index';

const CounterComponent = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = (operation) => {
      switch (operation) {
        case 'ADD':
          setCount(count + 1);
          break;
        case 'SUBSTRACT':
          setCount(count - 1);
          break;
        case 'CLEAR':
          setCount(0);
          break;
        default:
          break;
      }
    };
  
    return (
      <div>
        <p>Contador: {count}</p>
        <ButtonComponents
          tipo="ADD"
          onClick={() => handleClick('ADD')}
        />
        <ButtonComponents
          tipo="SUBSTRACT"
          onClick={() => handleClick('SUBSTRACT')}
        />
        <ButtonComponents
          tipo="CLEAR"
          onClick={() => handleClick('CLEAR')}
        />
      </div>
    );
  };
  

export default CounterComponent;

//https://legacy.reactjs.org/docs/hooks-state.html