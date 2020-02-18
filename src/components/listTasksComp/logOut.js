const LogOut = (getUser) => {
  localStorage.setItem('token', '');
  getUser(false);
};

export default LogOut;
