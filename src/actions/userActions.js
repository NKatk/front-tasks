import { GET_USER } from '../constants';

const getUser = (data) => (
  {
    type: GET_USER,
    payload: data,
  }
);

export default getUser;
