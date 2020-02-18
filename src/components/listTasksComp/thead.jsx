import React from 'react';
import {
  ChevronUp, ChevronDown, X, Check,
} from 'react-feather';
import sortFunc from './sortFunc';

const Thead = ({
  sort, user, sortList,
}) => (
  <thead>
    <tr>
      <th className="user-col">
        <button
          type="button"
          onClick={() => sortList(sortFunc(sort, 'username'))}
          className={
            sort.sortField === 'username'
              ? 'active-button'
              : null
          }
        >
          <span>Name</span>
          {
            sort.sortField === 'username'
            && (
              sort.sortDirection === 'asc'
                ? <ChevronDown />
                : <ChevronUp />
            )
          }
        </button>
      </th>
      <th className="email-col">
        <button
          type="button"
          onClick={() => sortList(sortFunc(sort, 'email'))}
          className={sort.sortField === 'email' ? 'active-button' : null}
        >
          <span>Email</span>
          {
            sort.sortField === 'email'
              && (
                sort.sortDirection === 'asc'
                  ? <ChevronDown />
                  : <ChevronUp />
              )
          }
        </button>
      </th>
      <th className="text-col">Task</th>
      <th className="status-col">
        <button
          type="button"
          onClick={() => sortList(sortFunc(sort, 'status'))}
          className={sort.sortField === 'status' ? 'active-button' : null}
        >
          <span>Status</span>
          {
            sort.sortField === 'status'
              && (
                sort.sortDirection === 'asc'
                  ? <X />
                  : <Check />
              )
          }
        </button>
      </th>
      {user ? <th className="admin-col">{null}</th> : null}
    </tr>
  </thead>
);

export default Thead;
