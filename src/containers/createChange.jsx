import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUser from '../actions/userActions';
import CreateChangeComp from '../components/createChangeComp';

const CreateChange = ({
  history, match, tasks, user, getUser,
}) => (
  <div>
    <CreateChangeComp
      history={history}
      match={match}
      tasks={tasks}
      user={user}
      getUser={getUser}
    />
  </div>
);

const mapStateTopProps = (store) => ({
  tasks: store.tasks,
  user: store.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (data) => dispatch(getUser(data)),
});

CreateChange.propTypes = {
  tasks: PropTypes.object.isRequired,//eslint-disable-line
  user: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps,
)(CreateChange);
