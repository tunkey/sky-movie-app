export const loadMoreData = (currentData, incomingData, page) => {
  if (page === 1) {
    return incomingData;
  }
  if (currentData.length >= incomingData.length) {
    return currentData.concat(incomingData);
  }
  return null;
};
