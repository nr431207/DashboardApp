import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
import Campaign from './component/Campaign';

configure({ adapter: new Adapter() });
// const store = configureStore([])();
