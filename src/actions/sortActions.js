import { SORT_LIST } from '../constants';

const sortList = (data) => (
  {
    type: SORT_LIST,
    payload: data,
  }
);

export default sortList;
