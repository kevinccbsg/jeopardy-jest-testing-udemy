import React from 'react';
import { shallow } from 'enzyme';
import { Clue } from './Clue';
import { clue as clueFixture } from '../data/fixtures';

const props = {
  clue: clueFixture,
};

describe('Clue', () => {
  const clue = shallow(<Clue {...props} />);
  it('renders the clue value', () => {
    expect(clue.find('h4').text()).toEqual(clueFixture.value);
  });

  it('renders the clue question', () => {
    expect(clue.find('h5').at(0).text()).toEqual(clueFixture.question);
  });

  it('renders the clue answer', () => {
    expect(clue.find('h5').at(1).text()).toEqual(clueFixture.answer);
  });

  it('sets with text-hidden class', () => {
    expect(clue.find('h5').at(1).hasClass('text-hidden')).toBe(true);
  });

  it('reveal state false', () => {
    expect(clue.state().showed).toBe(false);
  });

  describe('clicking on clue compoennt', () => {
    beforeEach(() => {
      clue.find('div.clue').simulate('click');
    })

    it('sets with text-revealed class', () => {
      expect(clue.find('h5').at(1).hasClass('text-revealed')).toBe(true);
    });

    it('reveal state true', () => {
      expect(clue.state().showed).toBe(true);
    });
  });
});
