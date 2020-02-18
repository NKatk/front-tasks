import React from 'react';
import HeadTasks from './headTasks';
import Thead from './thead';
import Tbody from './tbody';
import ButtonsPage from './buttonsPage';

const ListTasksComp = ({
  sort, page, tasks, user, sortList, choicePage, getUser,
}) => (
  <div className="list-task">
    <HeadTasks user={user} getUser={getUser} />
    {
      !!tasks.tasks.length
      && (
        <div className="table-task">
          <table>
            <Thead sort={sort} user={user} sortList={sortList} />
            <Tbody tasks={tasks.tasks} user={user} />
          </table>
          <ButtonsPage page={page} totalTaskCount={tasks.totalTaskCount} choicePage={choicePage} />
        </div>
      )
    }
  </div>
);

export default ListTasksComp;
