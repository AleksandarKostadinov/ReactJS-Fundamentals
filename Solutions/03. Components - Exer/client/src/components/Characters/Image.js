import React, { Component } from 'react'

export default class Image extends Component {
  render () {
    return (
      <img className='image' src={this.props.url} alt='Hi' id={this.props.id} onClick={this.props.onImgClicked} />
    )
  }
}
