import { getFormattedDate } from '../../../utils/date-util';

describe('DateUtil', () => {
  describe('Should return formatted date when date is string', () => {
    test('amount is 10.12', () => {
      expect(getFormattedDate('10/12/2020')).toEqual('October 12, 2020');
    });
  });
});
