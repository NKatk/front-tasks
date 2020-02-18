const findTask = (id, arr) => (
  arr.find((item) => +item.id === +id)
);

export default findTask;
