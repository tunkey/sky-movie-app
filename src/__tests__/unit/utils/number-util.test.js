import { getFloor } from '../../../utils/number-util';

describe('NumberUtil', () => {
  describe('Should return floor when amount is float', () => {
    test('amount is 10.12', () => {
      expect(getFloor(10.12)).toEqual(10);
    });
    test('amount is 12', () => {
      expect(getFloor(12)).toEqual(12);
    });
  });
});
