import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './COMPONENTS/NAVIGATION/NavBar.jsx';
import Feature from './COMPONENTS/FEATURE/Feature.jsx';
import {useFetch} from './hooks/useFetch.js'
import About from './COMPONENTS/ABOUT/About.jsx';
import Endpoints from './COMPONENTS/ENDPOINTS/Endpoints.jsx'
import RequestForm from './COMPONENTS/REQUEST/RequestForm.jsx';
import Contact from './COMPONENTS/CONTACT/Contact.jsx';

function App() {
  const { loading, data, error } = useFetch(`https://cultcatalogue.herokuapp.com/random`)
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
            <Route exact path="/endpoints" component={Endpoints} />
            <Route exact path="/add-form" component={RequestForm} />
            <Route exact path="/contact" component={Contact}/>
        </Switch>
        </div>
      </div>
    );
}

export default App;
