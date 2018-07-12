import React, { Component } from 'react'
import { Input } from './Input'

export class InputsList extends Component {
  render () {
    return (
      <div>
        {this.props.formSettings.map((p, i) => <Input {...p} key={i} />)}
      </div>
    )
  }
}

export default InputsList
