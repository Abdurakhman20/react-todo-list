const paginate = (items, currentPageNumber, pageSize) => {
  const startIndex = (currentPageNumber - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
};
export default paginate;
