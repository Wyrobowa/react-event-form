import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders InputFormField component without crashing', () => {
  shallow(<Header />);
});
