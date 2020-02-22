import React from 'react';
import { shallow } from 'enzyme';
import InputFormField from './InputFormField';

it('renders InputFormField component without crashing', () => {
  shallow(<InputFormField id="name" label="Name" onChange={() => {}} />);
});
