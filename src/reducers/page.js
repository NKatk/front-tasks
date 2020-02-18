import { CHOICE_PAGE } from '../constants';

const initialState = {
  page: 1,
};

const pageReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHOICE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default pageReducers;
