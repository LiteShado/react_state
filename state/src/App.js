import './App.css';
import { useState } from 'react'

import ColorChanger from './components/ColorChanger';
import Counter from './components/Counter';

function App() {
    const [showing, setShowing] = useState('color-changing')
    const [number, setNumber] = useState(0)

  return (

    <div className="container">

      <nav>
        <span onClick={() => { setShowing('colorchanger') }}>Color Changer</span>


        <span onClick={() => { setShowing('counter') }}>Counter</span>
      </nav>

    { showing ==='colorchanger' ?
      <ColorChanger />
    : null
    }

    { showing ==='counter' ?
      <Counter />
      : null
    }

    </div>
  );
}

export default App;
