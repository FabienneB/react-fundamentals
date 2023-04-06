// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  const inputRef = React.useRef();
  function handleSubmit(event) {
    const val = event.target.elements.usernameInput.value;
    //const val = inputRef.current.value;
    event.preventDefault();
    onSubmitUsername(val);
  }

  function handleChange(event) {
    const {value} = event.target;
    // Extra credit 3
    const username = value.toLowerCase();
    setUsername(username);
    // Extra credit 2
    // const isLowerCase = value === value.toLowerCase();
    // setError(isLowerCase ? null : 'Username must be lower case')
  }

// You may consider adding a `role="alert"` to the element you use to display the
// error to assist with screen reader users.

// Make sure you pass `handleChange` to the `onChange` handler of the `input`.
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={inputRef} onChange={handleChange} value={username} />
      </div>
      {/* <div style={{color: 'red'}}> {error} </div> */}
      {/* <button type="submit" disabled={Boolean(error)}>Submit</button> */}
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
