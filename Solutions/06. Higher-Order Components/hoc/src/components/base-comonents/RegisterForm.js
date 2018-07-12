import React, { Component } from 'react'
import withAlert from './../hoc/withAlert'

class RegisterFormBase extends Component {
  render () {
    return (
      <div>
        <header><span className='title'>Register</span></header>
        <form>
          Username:
          <input type='text' /><br />
          Email:
          <input type='text' /><br />
          Password:
          <input type='password' /><br />
          Repeat Password:
          <input type='password' /><br />
          <input type='submit' value='Register' />
        </form>
      </div>
    )
  }
}

const RegisterForm = withAlert(RegisterFormBase)

export default RegisterForm
