export const getVoteBadgeVariant = vote => {
  let variant = 'danger';

  if (vote > 5) {
    variant = 'warning';
  }

  if (vote > 6) {
    variant = 'info';
  }

  if (vote > 7) {
    variant = 'success';
  }

  return variant;
};
