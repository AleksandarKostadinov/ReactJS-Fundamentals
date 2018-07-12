import React, { Component } from 'react'

export class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      emitError: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({emitError: true})
  }

  render () {
    if (this.state.emitError) {
      throw new Error('I am buggy')
    }

    return (
      <nav onClick={this.handleClick}>
        <header><span className='title'>Navigation</span></header>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Buggy Link</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact Us</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
