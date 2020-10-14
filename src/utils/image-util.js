import { IMAGE_CONST } from '../constants/common';

export const getStandardImageSource = path =>
  `${IMAGE_CONST.HOST}${IMAGE_CONST.DEFAULT}${path}`;

export const getImageSource = path => {
  return path ? getStandardImageSource(path) : IMAGE_CONST.NO_POSTER;
};
