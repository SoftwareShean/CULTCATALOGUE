import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './COMPONENTS/Layout/Header'
import Artisthome from './COMPONENTS/ARTIST/Artisthome';
import Artistprofile from './COMPONENTS/ARTIST/Artistprofile';
import Createpage from './COMPONENTS/ObjUpdate/Createpage';

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
          <Header />
          <Switch>
            <Route
              exact path="/"
              render={(props) =>
                (<Artisthome data={this.state.artist} />)}
            />
            <Route
              path="/artist/:id"
              render={(props) =>
                (<Artistprofile data={this.state.artist} />)}
            />
            <Route 
              path="/createpage"
              render={(props) =>
                (<Createpage />)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

