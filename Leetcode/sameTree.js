/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var isSameTree = function(p, q) {
  // If both trees are null, they are the same
if (!p && !q) return true;

// If one of them is null or values are different, they are not the same
if (!p || !q || p.val !== q.val) return false;

// Recursively check left and right subtrees
return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let p = new TreeNode(1, new TreeNode(2), null); // Tree: [1,2]
let q = new TreeNode(1, new TreeNode(2)); // Tree: [1,null,2]

console.log(isSameTree(p, q)); // Output: false