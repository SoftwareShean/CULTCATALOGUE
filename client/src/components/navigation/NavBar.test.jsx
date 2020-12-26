import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import {
    Link,
    BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from './NavBar.jsx'

configure({ adapter: new Adapter() });

describe('NavBar Component', () => {
    let component;
    beforeEach(() => {
    component = mount(<Router><NavBar /></Router>);
    });
    it('Should render an <h1> tag containing application title', () => {
        expect(component.contains(<Link to="/"><h1>CULTCATALOGUE</h1></Link>));
    });
    it('Should render an <h2> tag containing About', () => {
        expect(component.contains(<Link to="/about"><h2>ABOUT</h2></Link>)).toBe(true);
    });
    it('Should render an <h2> tag containing ENDPOINTS', () => {
        expect(component.contains(<Link to="/endpoints"><h2>ENDPOINTS</h2></Link>)).toBe(true);
    });
    it('Should render an <h2> tag containing Add an artist', () => {
        expect(component.contains(<Link to="/add-form"><h2>ADD AN ARTIST</h2></Link>)).toBe(true);
    });
    it('Should render an <h2> tag containing Contact', () => {
        expect(component.contains(<Link to="/contact"><h2>CONTACT</h2></Link>)).toBe(true);
    });
});