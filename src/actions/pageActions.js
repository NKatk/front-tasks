import { CHOICE_PAGE } from '../constants';

const choicePage = (data) => (
  {
    type: CHOICE_PAGE,
    payload: data,
  }
);

export default choicePage;
