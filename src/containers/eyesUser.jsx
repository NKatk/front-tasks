//  Component for handling the first load of urls other than '/' and a possible header
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getData from '../actions/tasksActions';
import getUser from '../actions/userActions';
import getDataAxios from '../lib/getDataAxios';

const EyesUser = ({
  sort, page, getUser, getData,
}) => {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      getDataAxios(getData, getUser, sort.sortField, sort.sortDirection, page);
    }
  }, []);// eslint-disable-line

  return (
    <div>
      {null}
    </div>
  );
};

const mapStateTopProps = (store) => (
  {
    page: store.page.page,
    sort: store.sort,
    user: store.user.user,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getData: (data) => dispatch(getData(data)),
    getUser: (data) => dispatch(getUser(data)),
  }
);

EyesUser.propTypes = {
  page: PropTypes.number.isRequired,
  sort: PropTypes.object.isRequired,// eslint-disable-line
  getData: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};


export default connect(
  mapStateTopProps,
  mapDispatchToProps,
)(EyesUser);
