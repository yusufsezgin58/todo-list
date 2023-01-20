import './App.css';
import { useState } from 'react';

function App() {

  let VALUES = []

  const [inputText, setInputText] = useState('')
  const [values, setValues] = useState(VALUES)

  return (
    <div className="App">

      <input placeholder='Add task' value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
      <button type='button' onClick={() => setValues([...values, { taskName: inputText }])}>ADD</button>
      <ol type='1'>
        {
          values.map((item, index) => {
            return (
              <li key={index}>
                {item.taskName}
              </li>
            )
          })
        }
      </ol>
    </div>
  );
}

export default App;
