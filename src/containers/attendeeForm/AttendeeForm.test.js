import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import AttendeeForm from './AttendeeForm';
import configureStore from '../../configureStore';

const store = configureStore();

describe('AttendeeForm', () => {
  it('renders AttendeeForm container without crashing', () => {
    const component = shallow(<Provider store={store}><AttendeeForm /></Provider>);

    expect(component).toMatchSnapshot();
  });
});
