import { SET_CATEGORIES, PICK_CATEGORY } from '../actions';

const initialState = {
  categories: [],
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case PICK_CATEGORY: {
      return { ...state, category: action.category };
    }
    case SET_CATEGORIES: {
      return { ...state, categories: action.categories };
    }
    default:
      return { ...state }; 
  }
};

export default reducer;
