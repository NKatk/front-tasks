import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { XSquare } from 'react-feather';
import submitLogIn from '../../lib/submitLogIn';

const LogInComp = ({ user, getUser }) => {
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [dataFormUS, setDataFormUS] = useState('');
  const [dataFormPS, setDataFormPS] = useState('');

  if (success) {
    setTimeout(() => {
      getUser(true);
    }, 1500);
  }

  const submit = async (e) => {
    setDisable(true);
    const result = await submitLogIn(e, dataFormUS, dataFormPS);
    setSuccess(result.success);
    setError(result.error);
    if (Object.keys(result.error).length) setDisable(false);
  };

  if (localStorage.getItem('token') && user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-block">
      <div className="link-block">
        <Link to="/"><XSquare /></Link>
      </div>
      <form className="form-block" onSubmit={submit}>
        {success && <i className="message-info info-success">Login successfully!</i>}
        <div>
          <label htmlFor="username">Name</label>
          <br />
          <input
            id="username"
            onChange={(e) => setDataFormUS(e.target.value)}
            type="text"
          />
          <br />
          {error.username && <i className="message-info info-error">{error.username}</i>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            onChange={(e) => setDataFormPS(e.target.value)}
            type="password"
          />
          <br />
          {error.password && <i className="message-info info-error">{error.password}</i>}
        </div>
        <div>
          <button
            type="submit"
            disabled={disable}
          >
            <span>Enter</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInComp;
