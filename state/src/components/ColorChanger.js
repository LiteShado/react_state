import { useState} from 'react'

const ColorChanger = () => {
    const [color, setColor] = useState('green')


    return (
        <div>
        <div className= {`box ${color}`}/>
        <div className="buttons-Container">
        <button onClick={() => { setColor('red')}}>Red</button>
        <button onClick={() => { setColor('blue')}}>Blue</button>
        <button onClick={() => { setColor('green')}}>Green</button>
        </div>
      </div>

    )
}


export default ColorChanger
