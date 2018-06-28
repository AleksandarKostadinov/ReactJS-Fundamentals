import React from 'react'
import Image from './Image'
import Info from './Info'

export default class Details extends React.Component {
  render () {
    return (
      <section id='bio'>
        <Image url={this.props.url} id={this.props.id} />
        <Info name={this.props.name} bio={this.props.bio} />
      </section>
    )
  }
}
