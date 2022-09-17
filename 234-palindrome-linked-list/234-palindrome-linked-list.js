/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  // let left = 0;
  // let right = arr.length - 1;
  // while (left <= right) {
  //   if (arr[left] !== arr[right]) return false;
  //   left++, right--;
  // }
  // return true;
  const str = arr.join("");
  const reverse = arr.reverse().join("");
  if (str == reverse) {
    return true;
  } else return false;
};
