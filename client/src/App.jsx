import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation/NavBar.jsx';
import Feature from './components/feature/Feature.jsx';
import {useFetch} from './hooks/useFetch.js'
import About from './components/about/About.jsx';
import Endpoints from './components/endpoints/Endpoints.jsx'
import RequestForm from './components/request/RequestForm.jsx';
import Contact from './components/contact/Contact.jsx';
import Search from './components/search/Search';

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
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/search" component={Search}/>
        </Switch>
        </div>
      </div>
    );
}

export default App;
