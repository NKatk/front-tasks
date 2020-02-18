import React from 'react';
import { Redirect } from 'react-router-dom';

import NotFound from '../notFound';
import findTask from './findTask';
import CreateTask from './createTask';
import ChangeTask from './changeTask';

const CreateChangeComp = ({
  history, match, tasks, user, getUser,
}) => {
  if (match.params.id) {
    if (match.params.id && tasks.tasks.length) {
      if (user) {
        const task = findTask(match.params.id, tasks.tasks);
        if (task) {
          return (
            <ChangeTask
              history={history}
              task={task}
              getUser={getUser}
            />
          );
        }
        return <NotFound />;
      }
      return <Redirect to="/login" />;
    }
    return <div> </div>;
  }
  return <CreateTask history={history} />;
};

export default CreateChangeComp;
