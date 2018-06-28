import React from 'react'

import Rooster from './Rooster'
import Details from './Details'
import fetcher from '../../fetcher'

const ROOSTER_ENPOINT = '/roster'
// const DETAILS_ENDPOINT = '/character/'

export default class Characters extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      images: [],
      current: {}
    }

    this.onImgClicked = this.onImgClicked.bind(this)
  }

  componentDidMount () {
    fetcher.get(ROOSTER_ENPOINT, data => {
      this.setState({
        images: data,
        current: data[0]
      })
    })
  }

  onImgClicked (e) {
    const id = e.target.id

    this.setState({
      current: this.state.images[id]
    })
  }

  render () {
    return (
      <div>
        <Rooster images={this.state.images} onImgClicked={this.onImgClicked} />
        <Details {...this.state.current} />
      </div>
    )
  }
}
