import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './COMPONENTS/HEADER/Header'
import Artisthome from './COMPONENTS/ARTIST/Artisthome';
import Artistprofile from './COMPONENTS/ARTIST/Artistprofile';

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      artist: []
    }
  }
  componentDidMount = async () => {
    let response = await axios.get('https://cultcatalogue.herokuapp.com/artist')
    console.log(response)
    this.setState({
      artist: response.data
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/">
         <Header /> 
        </Route>
        
        <div className="artistCollection">
          <Route path="/" exact>
            <Artisthome data={this.state.artist} />
          </Route>
          <Route path="/artist/:id" exact>
            <Artistprofile data={this.state.artist} />
          </Route>
        </div>
      </div>
    );
  }
}

