import axios from 'axios';
import DEVELOPER from './constatntDEV';

const submitLogIn = async (e, username, password) => {
  e.preventDefault();
  const form = new FormData();
  form.append('username', username);
  form.append('password', password);
  try {
    const result = await axios.post(`https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=${DEVELOPER}`, form);
    if (result.data.status === 'ok') {
      localStorage.setItem('token', result.data.message.token);
      return ({
        success: true,
        error: {},
      });
    }
    return ({
      success: false,
      error: result.data.message,
    });
  } catch (e) {
    return ({
      success: false,
      error: {},
    });
  }
};

export default submitLogIn;
