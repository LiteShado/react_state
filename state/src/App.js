import './App.css';
import { useState } from 'react'

function App() {
    const [number, setNumber] = useState(0)
    const [color, setColor] = useState('red')
    const [showing, setShowing] = useState('color-changing')

  return (

    <div className="container">

      <nav>
        <span onClick={() => { setShowing('colorchanger') }}>Color Changer</span>


        <span onClick={() => { setShowing('counter') }}>Counter</span>
      </nav>

    { showing ==='colorchanger' ?

    <div>
      <div className= {`box ${color}`}/>
      <div className="buttons-Container">
      <button onClick={() => { setColor('red')}}>Red</button>
      <button onClick={() => { setColor('blue')}}>Blue</button>
      <button onClick={() => { setColor('green')}}>Green</button>
      </div>
    </div>

    : null
    }

    { showing ==='counter' ?
      <div>
        <div className= {`box ${number}`}/>
        <div className="buttons-Container">
        <div>{number}</div>
        <button onClick={() => { setNumber(number + 1) }}>+</button>
        <button onClick={() => { setNumber(number - 1) }}>-</button>
        </div>
      </div>

      : null

    }

    </div>
  );
}

export default App;
