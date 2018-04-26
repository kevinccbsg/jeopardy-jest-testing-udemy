import React from 'react';
import { mount, shallow } from 'enzyme';
import { fakeServer } from 'sinon';
import { Category, LinkCategoryComponent } from './Category';
import { category, categories, clues } from '../data/fixtures';

const props = {
  category,
};

describe('Category', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clues)
      ]
    );
  });

  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      category = mount(<Category {...props} />);

      server.respond();
      setTimeout(done);
    });

    // it('logs the category', () => {
    //   console.log(category.state());
    //   console.log(category.debug());
    // });

    it('initializes the clues in state', () => {
      expect(category.state().clues).toEqual(clues);
    });

    it('renders the category title', () => {
      expect(category.find('h2').text()).toEqual(props.category.title);
    });

    it('renders the correct number of clues', () => {
      category.update();
      expect(category.find('Clue').length).toEqual(clues.length);
    });
  });
});

describe('LinkCategoryComponent', () => {
  const linkcategory = shallow(<LinkCategoryComponent />);
  it('creates link to navigate', function() {
    expect(linkcategory.find('Link').exists()).toBe(true);
  });

  it('Creates a category component', () => {
    expect(linkcategory.find('Category').exists()).toBe(true);
  });
});
