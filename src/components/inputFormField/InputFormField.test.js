import React from 'react';
import { shallow } from 'enzyme';
import InputFormField from './InputFormField';

describe('Header', () => {
  it('renders InputFormField component without crashing', () => {
    const component = shallow(<InputFormField id="name" label="Name" onChange={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});
