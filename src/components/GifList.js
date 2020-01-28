import React, { Component } from 'react'

export default class GifList extends Component {
  makeGifList = () => {
    console.log(this.props)
    return this.props.gifurls.map(url => <img key={url} alt='gif from search' src={url}/>)
  }
  render() {
    return(
      <ul>
        <li>{this.makeGifList()}</li>
      </ul>
    )
  }
}
