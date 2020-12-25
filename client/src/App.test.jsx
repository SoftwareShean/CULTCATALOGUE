import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route, Fragment } from 'react-router-dom';
import App from './App.jsx';
import NavBar from './COMPONENTS/NAVIGATION/NavBar.jsx';

configure({ adapter: new Adapter() })

describe('App', () => {
    let component;
    beforeEach(() => {
        component = mount(<Fragment><App /></Fragment>);
    });
    it('Routes NavBar at /', () => {
        expect(component.find('Route[path="/"]').first().prop('render')).toBe(NavBar);
    });
})