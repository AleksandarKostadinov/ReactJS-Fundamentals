import React, { Component } from 'react'

export default class Info extends Component {
  render () {
    return (
      <div className='info'>
        <p>Name: <strong>{this.props.name}</strong></p>
        <p>Bio: </p>
        <p>{this.props.bio}</p>
      </div>
    )
  }
}
