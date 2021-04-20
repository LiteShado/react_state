import { useState } from 'react'

const Counter = (props) => {
    const [number, setNumber] = useState(props.number)
    return (
        <div>
            <div className= {`box ${number}`}/>
            <div className="buttons-Container">
            <div>{number}</div>
            <button onClick={() => { setNumber(number + 1) }}>+</button>
            <button onClick={() => { setNumber(number - 1) }}>-</button>
            </div>
      </div>

    )
}

export default Counter
