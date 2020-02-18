import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XSquare } from 'react-feather';
import createAxios from '../../lib/createAxios';

const CreateTask = ({ history }) => {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dataFormUS, setDataFormUS] = useState('');
  const [dataFormEM, setDataFormEM] = useState('');
  const [dataFormTXT, setDataFormTXT] = useState('');
  const [error, setError] = useState({});

  const submit = async (e) => {
    setDisable(true);
    const result = await createAxios(e, dataFormUS, dataFormEM, dataFormTXT);
    setSuccess(result.success);
    setError(result.error);
    if (Object.keys(result.error).length) setDisable(false);
  };

  if (success) {
    setTimeout(() => {
      history.push('/');
    }, 1500);
  }

  return (
    <div className="create-block">
      <div className="link-block">
        <Link to="/"><XSquare /></Link>
      </div>
      <form className="form-block" onSubmit={submit}>
        {success && <i className="message-info info-success">Saved successfully!</i>}
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
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            onChange={(e) => setDataFormEM(e.target.value)}
            type="text"
          />
          <br />
          {error.email && <i className="message-info info-error">{error.email}</i>}
        </div>
        <div>
          <label htmlFor="text">Task</label>
          <br />
          <textarea
            id="text"
            onChange={(e) => setDataFormTXT(e.target.value)}
            type="text"
          />
          <br />
          {error.text && <i className="message-info info-error">{error.text}</i>}
        </div>
        <button
          type="submit"
          disabled={disable}
        >
          <span>Save</span>
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
