import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import AttendeeForm from './AttendeeForm';
import configureStore from '../../configureStore';

const store = configureStore();

it('renders AttendeeForm container without crashing', () => {
  shallow(<Provider store={store}><AttendeeForm /></Provider>);
});
