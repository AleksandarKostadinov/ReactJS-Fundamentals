import React, { Component } from 'react'
import Article from './components/base-comonents/Article'
import RegisterForm from './components/base-comonents/RegisterForm'
import Navigation from './components/base-comonents/Navigation'
import ErrorBoundary from './components/ErrorBoundary'
import './resources/warning.css'
import Form from './components/forms/Form'

class App extends Component {
  render () {
    return (
      <div>
        <p>
          Hello. There is a link emitting Error in the Navigation. I could not make the Error Boundary work properly.
        </p>
        <p>
          If you have any suggestions about that problem, please write in the comment. Thanks in advance.
        </p>
        <Form onSubmited={onSubmited}>
          Username:
          <input type='text' name='username' />
          Password:
          <input type='password' name='password' />
          <input type='submit' value='Login' />
        </Form>

        <Form onSubmited={onSubmited}>
          Car model:
          <input type='text' name='model' />
          Color:
          <input type='text' name='color' />
          <input type='submit' value='Submit Car' />
        </Form>
        <Article />
        <RegisterForm />
        <ErrorBoundary>
          <Navigation />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App

function onSubmited (data, e) {
  console.log(data)
}
