
const SET_CATEGORIES = 'SET_CATEGORIES';
const setCategories = (categories) => (
  {
    type: SET_CATEGORIES,
    categories,
  }
);

const PICK_CATEGORY = 'PICK_CATEGORY';
const pickCategory = (category) => (
  {
    type: PICK_CATEGORY,
    category,
  }
);

export {
  SET_CATEGORIES,
  PICK_CATEGORY,
  setCategories,
  pickCategory,
};
