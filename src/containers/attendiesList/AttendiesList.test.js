import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import AttendiesList from './AttendiesList';
import configureStore from '../../configureStore';

const store = configureStore();

it('renders AttendiesList container without crashing', () => {
  shallow(<Provider store={store}><AttendiesList /></Provider>);
});
