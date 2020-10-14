import { OVERVIEW_LENGTH } from '../constants/common';

export const getOverview = overview =>
  overview ? overview.substring(0, OVERVIEW_LENGTH) : '';
