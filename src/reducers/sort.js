import { SORT_LIST } from '../constants';

const initialState = {
  sortField: 'username',
  sortDirection: 'asc',
};

const sortReducers = (state = initialState, action) => {
  switch (action.type) {
    case SORT_LIST:
      return {
        ...state,
        sortField: action.payload.sortField,
        sortDirection: action.payload.sortDirection,
      };

    default:
      return state;
  }
};

export default sortReducers;
