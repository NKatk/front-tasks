import axios from 'axios';
import DEVELOPER from './constatntDEV';

const createAXios = async (e, username, email, text) => {
  e.preventDefault();
  const form = new FormData();
  form.append('username', username);
  form.append('email', email);
  form.append('text', text);
  return axios.post(`https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=${DEVELOPER}`, form)
    .then((result) => {
      if (result.data.status === 'ok') {
        return ({
          success: true,
          error: {},
        });
      }
      return ({
        success: false,
        error: result.data.message,
      });
    })
    .catch(() => (
      {
        success: false,
        error: {},
      }
    ));
};

export default createAXios;
