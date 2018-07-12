import React, { Component } from 'react'

export class Input extends Component {
  render () {
    return (
      <div className='form-group'>
        <label className='control-label col-sm-2' htmlFor={this.props.id}>{this.props.labelText}</label>
        <div className='col-sm-10'>
          <input type={this.props.type} data-name={this.props.name} className='form-control' id={this.props.id} />
        </div>
      </div>
    )
  }
}

export default Input
