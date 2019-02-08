import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
