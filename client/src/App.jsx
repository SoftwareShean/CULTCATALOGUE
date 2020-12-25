import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './COMPONENTS/NAVIGATION/NavBar.jsx';
import Feature from './COMPONENTS/FEATURE/Feature.jsx';
import {useFetch} from './HOOKS/useFetch.js'
import { Fragment } from 'react';
import About from './COMPONENTS/ABOUT/About';
import SampleJSON from './COMPONENTS/SAMPLEJSON/SampleJSON';
import RequestForm from './COMPONENTS/REQUEST/RequestForm';
import Contact from './COMPONENTS/CONTACT/Contact';

function App() {
  const { loading, data, error } = useFetch(`https://cultcatalogue.herokuapp.com/artist`)
    return (
      <div className="App">
        <NavBar />
        <div className="main">
        <Switch>
          <Route exact path="/" render={() =>
            <Fragment>
              <Feature loading={loading} data={data} error={error} />
            </Fragment>
          } />
            <Route exact path="/about" component={About} />
            <Route exact path="/sample" component={SampleJSON} />
            <Route exact path="/add-form" component={RequestForm} />
            <Route exact path="/contact" component={Contact}/>
        </Switch>
        </div>
      </div>
    );
}

export default App;
