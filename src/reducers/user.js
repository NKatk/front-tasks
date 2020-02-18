import { GET_USER } from '../constants';

const initialState = {
  user: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;
