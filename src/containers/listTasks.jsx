import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getData from '../actions/tasksActions';
import sortList from '../actions/sortActions';
import choicePage from '../actions/pageActions';
import ListTasksComp from '../components/listTasksComp';
import getUser from '../actions/userActions';
import getDataAxios from '../lib/getDataAxios';

const ListTaks = ({
  page, sort, tasks, user, choicePage, sortList, getData, getUser,
}) => {
  useEffect(() => {
    getDataAxios(getData, getUser, sort.sortField, sort.sortDirection, page);
  }, [getData, getUser, sort.sortField, sort.sortDirection, page]);

  return (
    <div>
      <ListTasksComp
        page={page}
        sort={sort}
        tasks={tasks}
        user={user}
        choicePage={choicePage}
        sortList={sortList}
        getUser={getUser}
      />
    </div>
  );
};

const mapStateTopProps = (store) => (
  {
    page: store.page.page,
    sort: store.sort,
    tasks: store.tasks,
    user: store.user.user,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    choicePage: (data) => dispatch(choicePage(data)),
    sortList: (data) => dispatch(sortList(data)),
    getData: (data) => dispatch(getData(data)),
    getUser: (data) => dispatch(getUser(data)),
  }
);

ListTaks.propTypes = {
  page: PropTypes.number.isRequired,
  sort: PropTypes.object.isRequired,// eslint-disable-line
  tasks: PropTypes.object.isRequired,// eslint-disable-line
  user: PropTypes.bool.isRequired,
  choicePage: PropTypes.func.isRequired,
  sortList: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};


export default connect(
  mapStateTopProps,
  mapDispatchToProps,
)(ListTaks);
