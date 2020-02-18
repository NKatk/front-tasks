import React from 'react';
import { AlertTriangle } from 'react-feather';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-not-found">
    <Link to="/">Home</Link>
    <div><AlertTriangle /></div>
    <div><span>Page not found!</span></div>
  </div>
);

export default NotFound;
