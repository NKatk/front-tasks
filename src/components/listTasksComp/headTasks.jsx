import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, LogIn, LogOut } from 'react-feather';
import logOut from './logOut';


const HeadeTasks = ({ user, getUser }) => (
  <div className="head-tasks">
    <Link to="/createchange"><Plus /></Link>
    <h1>BeeJee Tasks</h1>
    {
      user
        ? <LogOut onClick={() => logOut(getUser)} />
        : <Link to="/login"><LogIn /></Link>
    }
  </div>
);


export default HeadeTasks;
