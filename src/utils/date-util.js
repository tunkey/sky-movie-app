export const getFormattedDate = date => {
  return new Date(date).toLocaleString('en-uk', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
