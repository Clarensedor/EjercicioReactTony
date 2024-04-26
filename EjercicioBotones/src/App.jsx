import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponents from '../Components/MyButtons/index';
import CounterComponent from '../Components/LogicCounter';

function App() {

  return (
    <div>
      <CounterComponent/>
    </div>
  );
}

export default App
