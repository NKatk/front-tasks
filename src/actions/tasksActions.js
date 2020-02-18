import { GET_DATA } from '../constants';

const getData = (data) => (
  {
    type: GET_DATA,
    payload: data,
  }
);

export default getData;
