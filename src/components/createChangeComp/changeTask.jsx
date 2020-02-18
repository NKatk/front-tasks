import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XSquare, Square, CheckSquare } from 'react-feather';
import changeAxios from '../../lib/changeAxios';
import findChange from '../listTasksComp/findChange';

const ChangeTask = ({ history, task, getUser }) => {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({});
  const [dataFormTXT, setDataFormTXT] = useState(task.text);
  const [dataFormCH, setDataFormCH] = useState(!!task.status);

  const submit = async (e) => {
    setDisable(true);
    const result = await changeAxios(e, dataFormTXT, dataFormCH, task.id);
    setSuccess(result.success);
    setError(result.error);
    if (Object.keys(result.error).length) setDisable(false);
  };

  if (success) {
    if (task.text !== dataFormTXT && dataFormTXT !== '') {
      const arrayChange = (
        Array.isArray(JSON.parse(localStorage.getItem('changeTask')))
          ? JSON.parse(localStorage.getItem('changeTask'))
          : []
      );
      if (!findChange(task.id)) {
        arrayChange.push(task.id);
        localStorage.setItem('changeTask', JSON.stringify(arrayChange));
      }
    }
    setTimeout(() => {
      history.push('/');
    }, 1500);
  }

  if (error.token) {
    setTimeout(() => {
      localStorage.setItem('token', '');
      getUser(false);
      history.push('/login');
    }, 0);
  }

  return (
    <div className="change-block">
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
            type="text"
            defaultValue={task.username}
            disabled
          />
          <br />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="text"
            defaultValue={task.email}
            disabled
          />
          <br />
        </div>
        <div>
          <label htmlFor="text">Task</label>
          <br />
          <textarea
            id="text"
            onChange={(e) => setDataFormTXT(e.target.value)}
            type="text"
            defaultValue={dataFormTXT}
          />
          <br />
          {error.text && <i className="message-info info-error">{error.text}</i>}
        </div>
        <div className="checkbox">
          <label htmlFor="status">Status</label>
          <div>
            {
              dataFormCH
                ? <CheckSquare onClick={() => setDataFormCH(false)} />
                : <Square onClick={() => setDataFormCH(true)} />
            }
          </div>
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

export default ChangeTask;
