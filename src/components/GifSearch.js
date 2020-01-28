import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
    }
  }



  render() {
    return (
      <div>
        <input type='text' onChange={this.props.onchange}/>
        <button onClick={this.props.submitprop}>Search for gifs</button>
      </div>
    )
  }
}