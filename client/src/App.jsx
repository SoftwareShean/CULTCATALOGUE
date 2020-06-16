import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './COMPONENTS/HEADER/Header'
import Artisthome from './COMPONENTS/ARTIST/Artisthome';

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      artist: []
    }
  }
  componentDidMount = async () => {
    let response = await axios.get('https://cultcatalogue.herokuapp.com/artist')
    this.setState({
      artist: response.data
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="artistCollection">
            <Artisthome data={this.state.artist}/>
        </div>
      </div>
    );
  }
}

