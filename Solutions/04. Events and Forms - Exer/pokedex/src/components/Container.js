import React, { Component } from 'react'
import Form from './Form'

export class Container extends Component {
  render () {
    return (
      <div>
        <Form
          formSettings={this.props.formSettings}
          alt={this.props.alt}
          onAuthSwitched={this.props.onAuthSwitched} />
        {this.props.pokedex}
      </div>
    )
  }
}

export default Container
