const sortFunc = (obj, string) => {
  if (obj.sortField === string) {
    return (
      {
        sortField: string,
        sortDirection: obj.sortDirection === 'asc' ? 'desc' : 'asc',
      }
    );
  }
  return (
    {
      sortField: string,
      sortDirection: 'asc',
    }
  );
};

export default sortFunc;
