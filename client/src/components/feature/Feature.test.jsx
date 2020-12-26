import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feature from './Feature.jsx'

configure({ adapter: new Adapter() })

// describe('App', () => {
//     let component; 
//     beforeEach(() => {
//         component = mount(<Feature />);
//     });
//     it('Renders component with className feature', () => {
//         expect(component.contains(<div className="feature"></div>).toBe(true))
//     })
// })