import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

let counter = 0

function countClicks () {
  counter++
  renderButton()
}

function getBtn (val) {
  return <button onClick={countClicks} >Clicked {val} times.</button>
}

function renderButton () {
  ReactDOM.render(getBtn(counter), document.getElementById('clickButton'))
}

const App = (
  <div className='App'>
    <div id='clickButton' >
      {getBtn(counter)}
    </div>
  </div>
)

export default App
