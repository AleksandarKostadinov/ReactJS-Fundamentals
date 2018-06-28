import React, { Component } from 'react'
import Image from './Image'

export default class Rooster extends Component {
  constructor (props) {
    super(props)

    this.listImgs = this.listImgs.bind(this)
  }

  listImgs (current) {
    return <Image url={current.url} key={current.id} id={current.id} onImgClicked={this.props.onImgClicked} />
  }

  render () {
    return (
      <section id='roster'>
        {this.props.images.map(this.listImgs)}
      </section>
    )
  }
}
