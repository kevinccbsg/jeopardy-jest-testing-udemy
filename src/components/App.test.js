import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { categories } from '../data/fixtures';

const props = {
  categories,
};

describe('App', () => {
  const app = shallow(<App {...props} />);
  it('renders title Jeopardy!', () => {
    expect(app.find('h2').text()).toEqual('Jeopardy!');
  });

  it('creates number of links', () => {
    expect(app.find('Link')).toHaveLength(categories.length);
  });

  it('returns the text correctly', () => {
    app.find('Link h4').forEach((linkTitle, index) => {
      expect(linkTitle.text()).toEqual(categories[index].title);
    });
  });
});
