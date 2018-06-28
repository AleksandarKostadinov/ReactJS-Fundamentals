import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'

function setTimer () {
  let interval = setInterval(() => {
    ReactDOM.render(
      <div>The time is {(new Date()).toLocaleString()}
        <button onClick={() => clearInterval(interval)} >Stop</button>
      </div>
      , document.getElementById('timer')
    )
  }, 1000)
}

const App = (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='App-title'>Welcome to React</h1>
    </header>
    <div id='timer' />
    {setTimer()}
  </div>
)

export default App
