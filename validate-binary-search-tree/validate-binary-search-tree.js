/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  function recurse(root, min, max) {
    //base cases
    if (root === null) return true;
    if (root.val >= max || root.val <= min) {
      return false;
    }
    //재귀함수
    return recurse(root.left, min, root.val) && recurse(root.right, root.val, max);
  }
  return recurse(root, -Infinity, Infinity);
};