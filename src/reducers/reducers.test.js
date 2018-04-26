import reducer, { initalState } from './index';
import * as actions from './../actions/index';
import { category, categories } from '../data/fixtures';

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(initalState, {})).toEqual(initalState);
  });

  it('pick category', () => {
    expect(reducer(initalState, actions.pickCategory(category)))
    .toEqual({
      category,
      categories: [],
    });
  });

  it('set categories', () => {
    expect(reducer(initalState, actions.setCategories(categories)))
    .toEqual({
      category: {},
      categories,
    });
  });
});
