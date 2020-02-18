import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUser from '../actions/userActions';
import LogInComp from '../components/logInComp';

const LogIn = ({
  user, getUser,
}) => (
  <div>
    <LogInComp
      user={user}
      getUser={getUser}
    />
  </div>
);


const mapStateTopProps = (store) => (
  {
    user: store.user.user,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getUser: (data) => dispatch(getUser(data)),
  }
);

LogIn.propTypes = {
  user: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
};


export default connect(
  mapStateTopProps,
  mapDispatchToProps,
)(LogIn);
