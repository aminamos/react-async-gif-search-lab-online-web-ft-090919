import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      gifs: []
    }
  }

  getGifs = query => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=H0lc2RB5l2iEs10cOwIFuqglMiOZJHEw&rating=g&limit=3`)
    .then(res => res.json())
    .then(obj => {
      let arr = []
      for (let i = 0; i < obj.data.length; i++) {
        arr.push(obj.data[i].images.original.url)
      }
      this.setState({
        gifs: arr
      })
    })
  }

  onChangeQuery = event => {
    this.setState({
      query: event.target.value
    })
  }

  submitHandler  = (event) => {
    event.preventDefault()
    event.persist()
    this.getGifs(this.state.query)
  }

  render() {
    return(
    <div>
      <GifSearch onchange={this.onChangeQuery} submitprop={this.submitHandler} />
      <GifList gifurls={this.state.gifs} />
    </div>
    ) 
    
  }
}