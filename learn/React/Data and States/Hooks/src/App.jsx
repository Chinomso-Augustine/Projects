import { useState } from 'react'
import './App.css'

//function for testing userInput using state 
export default function UserInput() {
  const [text, setText] = useState("Welcome"); {/*Sets default text to Welcome */ }

  /*Hook sample: count = reactive value and setCount = setter which acts like a function */
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <div> <button onClick={() => setCount(count - 1)}> {count} </button> </div>

      <div> <input value={text} onClick={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')}> Reset </button>

      </div>
    </div>
  )

}

