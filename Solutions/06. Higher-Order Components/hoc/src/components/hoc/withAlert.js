import React, { Component } from 'react'

function withAlert (WrappedComponent) {
  return class extends Component {
    render () {
      return (
        <div className='alert'>
          <span className='alert-symbol'>&#9888;</span>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withAlert
