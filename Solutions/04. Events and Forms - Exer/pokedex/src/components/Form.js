import React, { Component } from 'react'
import { InputsList } from './InputsList'

export class Form extends Component {
  render () {
    return (
      <div className='container'>
        <button type='button' className='btn btn-primary' onClick={this.props.onAuthSwitched}>{this.props.alt}</button>
        <form className='form-horizontal'>
          <InputsList formSettings={this.props.formSettings} />
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
