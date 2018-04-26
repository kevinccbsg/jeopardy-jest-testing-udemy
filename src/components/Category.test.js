import React from 'react';
import { mount } from 'enzyme';
import { Category } from './Category';
import { category } from '../data/fixtures';

const props = {
  category,
};

describe('Category', () => {
  const categoryWrapper = mount(<Category {...props} />);
  console.log(categoryWrapper.debug());
});
