import React from 'react'
import fetcher from '../../fetcher'

const IMAGE_URL = '/episodePreview/'

export default class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentEpisode: {
        id: null,
        url: null
      }
    }

    this.getEpisode = this.getEpisode.bind(this)
  }

  componentDidMount () {
    fetcher.get(IMAGE_URL + 0, episode => {
      this.setState({
        currentEpisode: episode
      })
    })
  }

  getEpisode (id) {
    fetcher.get(IMAGE_URL + id, episode => {
      this.setState({
        currentEpisode: episode
      })
    })
  }

  render () {
    return (
      <section id='slider'>
        <img className='button' src='/left.png' title='previous' alt='nav' onClick={() => this.getEpisode(this.state.currentEpisode.id - 1)} />
        <div className='image-container'>
          <img src={this.state.currentEpisode.url} alt='episode' />
        </div>
        <img className='button' src='/right.png' title='previous' alt='nav' onClick={() => this.getEpisode(this.state.currentEpisode.id + 1)} />
      </section>
    )
  }
}
