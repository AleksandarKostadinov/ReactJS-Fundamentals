import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from '../components/Container'
import formSettings from '../utilities/formSettings'
// import Pokedex from './Pokedex'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      formSettings: formSettings['login'],
      route: '',
      error: '',
      alt: 'Register'
    }

    this.onAuthSwitched = this.onAuthSwitched.bind(this)
  }

  componentDidMount () {
    if (this.state.route === 'register') {
      this.setState({
        formSettings: formSettings['signUp'],
        alt: 'Login'
      })

      return
    }

    this.setState({ formSettings: formSettings['login'] })
  }

  onAuthSwitched () {
    let currentRoute = 'register'

    if (this.state.route === 'register') {
      currentRoute = ''
    }

    this.setState({ route: currentRoute })
  }

  render () {
    return (
      <div className='App' >
        <Container
          formSettings={this.state.formSettings}
          alt={this.state.alt}
          onAuthSwitched={this.onAuthSwitched} />
      </div>
    )
  }
}
