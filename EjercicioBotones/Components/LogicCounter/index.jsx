import React, { useState } from 'react';
import ButtonComponents from '../MyButtons/index';
//import styles from './counter.module.css';
import styles from './counter.module.css';

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
      <p >{count}</p>
      <div >
        <ButtonComponents tipo="ADD" onClick={() => handleClick('ADD')} />
        <ButtonComponents tipo="SUBSTRACT" onClick={() => handleClick('SUBSTRACT')} />
        <ButtonComponents tipo="CLEAR" onClick={() => handleClick('CLEAR')} />
      </div>
    </div>
  );
};

export default CounterComponent;