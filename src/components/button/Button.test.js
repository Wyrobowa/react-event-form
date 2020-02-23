import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders Button component without crashing', () => {
    const component = shallow(<Button type="button" text="Button text" onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});
