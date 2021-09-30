import {addTwoNumbers} from './add-two-numbers';
import {arrayToList} from '../../utils/ListNode';

it('add-two-numbers', () => {
  const l1 = arrayToList([2,4,3]);
  const l2 = arrayToList([5,6,4]);
  const expected = arrayToList([7,0,8]);

  expect(addTwoNumbers(l1, l2)).toEqual(expected);
});


