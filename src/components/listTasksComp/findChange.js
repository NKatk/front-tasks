const findChange = (id) => {
  if (!localStorage.getItem('changeTask')) {
    return false;
  }
  const arrChange = JSON.parse(localStorage.getItem('changeTask'));
  if (!Array.isArray(arrChange)) {
    return false;
  }
  if (arrChange.indexOf(id) === -1) {
    return false;
  }
  return true;
};

export default findChange;
