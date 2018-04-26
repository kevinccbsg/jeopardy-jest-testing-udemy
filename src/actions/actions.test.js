import * as actions from './index';
import { category, categories } from '../data/fixtures';

describe('actions', () => {
  it('creates and action setCategories', () => {
    const expected = {
      type: actions.SET_CATEGORIES,
      categories,
    };
    expect(actions.setCategories(categories)).toEqual(expected)
  });
  it('creates and action pickCategory', () => {
    const expected = {
      type: actions.PICK_CATEGORY,
      category,
    };
    expect(actions.pickCategory(category)).toEqual(expected)
  });
});