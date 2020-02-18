import { combineReducers } from 'redux';

import pageReducers from './page';
import sortReducers from './sort';
import tasksReducers from './tasks';
import userReducers from './user';

const rootReducer = combineReducers({
  page: pageReducers,
  sort: sortReducers,
  tasks: tasksReducers,
  user: userReducers,
});

export default rootReducer;
