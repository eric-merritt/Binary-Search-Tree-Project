const arr = [48, 27, 56, 14, 38, 22, 15, 9, 12];
const n = arr.length;
let root;

function Node (d) {
  return {
    data: d,
    left: this.left,
    right: this.right
  }
  
}


function BinarySearchTree () {

  return {
    root: buildTree(arr, 0, n - 1),
  }
}

const buildTree = (arr, start, end) => {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let node = Node(arr[mid]);

  node.left = buildTree(arr, start, mid - 1);
  node.right = buildTree(arr, mid + 1, end);

  return node;
}

const preOrder = (node) => {
  if (node == null) return;

  console.log(node.data + ' ');
  preOrder(node.left);
  preOrder(node.right);
};


root = buildTree(arr, 0, n-1);
console.log('Preorder traversal of constructed BST');

preOrder(root)


const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

BinarySearchTree(arr);
prettyPrint(root);
