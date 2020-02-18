import axios from 'axios';
import DEVELOPER from './constatntDEV';

const changeAxios = async (e, text, status, id) => {
  e.preventDefault();
  const form = new FormData();
  form.append('text', text);
  form.append('status', status ? 10 : 0);
  form.append('token', localStorage.getItem('token'));
  return axios.post(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}?developer=${DEVELOPER}`, form)
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

export default changeAxios;
