import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

it('renders InputFormField component without crashing', () => {
  shallow(<Alert type="primary" msg="Alert message" />);
});
