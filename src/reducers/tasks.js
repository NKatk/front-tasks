import { GET_DATA } from '../constants';

const initialState = {
  tasks: [],
  totalTaskCount: 0,
};

const tasksReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        tasks: action.payload.tasks,
        totalTaskCount: action.payload.total_task_count,
      };

    default:
      return state;
  }
};

export default tasksReducers;
