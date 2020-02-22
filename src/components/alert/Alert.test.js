import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  it('renders Alert component without crashing', () => {
    const component = shallow(<Alert type="primary" msg="Alert message" />);

    expect(component).toMatchSnapshot();
  });
});
