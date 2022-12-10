import React from 'react'
import '../styles/App.css';
const App = () => {

  const submitButton = ()=>{
    console.log("form submitted");
  }
  return (
    <div id="main">
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit'onClick={submitButton}>Submit</button>
      </form>
    </div>
  )
}


export default App;
