import axios from 'axios';
import DEVELOPER from './constatntDEV';

const getDataAxios = (getData, getUser, sortFirld, sortDirection, page) => {
  axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=${DEVELOPER}&sort_field=${sortFirld}&sort_direction=${sortDirection}&page=${page}`)
    .then((result) => {
      if (result.data.status === 'ok') {
        getData(result.data.message);
      }
    })
    .catch(() => (
      {
        success: false,
        error: {},
      }
    ));
  if (localStorage.getItem('token')) {
    getUser(true);
  }
};

export default getDataAxios;
