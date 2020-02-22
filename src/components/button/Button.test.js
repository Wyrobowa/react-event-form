import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders InputFormField component without crashing', () => {
  shallow(<Button type="button" text="Button text" onClick={() => {}} />);
});
