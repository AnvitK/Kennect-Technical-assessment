const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const n = arr.length;

// For Loop
for (let i = 0; i < n; i++) {     // normal for loop
  console.log(arr[i]);
}

for (let ele of arr) {    // for of loop
  console.log(ele);
}

// While Loop
let idx = 0;

while (idx < arr.length) {
  console.log(arr[idx]);
  idx++;
}

// Continue / Break
for (let i = 0; i < n; i++) {    // continue (skips current iteration)
  if (arr[i] == 3) {
    continue;
  }
  console.log(arr[i]);
}

for (let i = 0; i < n; i++) {     // break (terminate the loop)
  if (arr[i] == 5) {
    break;
  }
  console.log(arr[i]);
}

// If Else (condition evaluation)
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 === 0) {
    console.log(`Even: ${arr[i]}`);
  } else {
    console.log(`Odd: ${arr[i]}`);
  }
}

// If Else-IF Else (multiple condition evaluation)
const arr2 = [-1, 2, 0, 3, -4, 6, -8];
const m = arr2.length;

for (let i = 0; i < m; i++) {
  if (arr2[i] > 0) {
    console.log(`Positive: ${arr2[i]}`);
  } else if (arr2[i] < 0) {
    console.log(`Negative: ${arr2[i]}`);
  } else {
    console.log(`Zero: ${arr2[i]}`);
  }
}

// Switch (to evaluate a value against multiple cases)
const dayNo = +prompt("Enter a valid(1-7) day number: ");

switch (dayNo) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong day no");
    break;
}

// -------------------------------------------------------------------

// Recursion (function calling itself till the base condition)
const printNTo1 = function (no) {    // print from no to 1
  if (no === 0) return;

  console.log(no);
  printNTo1(no - 1);
};
printNTo1(5);

const print1ToN = function (no) {    // print from 1 to no
  if (no === 0) return;

  print1ToN(no - 1);
  console.log(no);
};
print1ToN(5);

const fact = (no) => {               // calculate factorial of no 
  if (no < 0) {
    alert("No negative number allowed!!");
    return;
  }

  if (no == 0) return 1;

  return no * fact(no - 1);
};

const no = +prompt("Enter a no: ");
console.log(fact(no));

// -------------------------------------------------------------------

// Binary Search Tree - a binary tree where every node in the left subtree is less than the root, and every node in the right subtree is of a value greater than the root

// using ES6 classes
class Node {                    // creating a node
  constructor(data) {
    this.data = data;           // initialising the node data
    this.left = null;           // initialising the node left tree
    this.right = null;          // initialising the node right tree
  }
};

class BinarySearchTree {            // creating a binary search tree
  constructor() {
    this.root = null;               // initialising the root node of binary search tree 
  }

  insert(data) {
    const newNode = new Node(data);       // creating a new node object using new keyword and Node class

    if (this.root === null) {              // if root node is null, then the created new node becomes the root node of binary search tree 
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);      // else inserting the node in the tree while checking the binary search tree conditions
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {              // if the new node's data < current node data, then insert the node in the left sub tree
      if (node.left === null) {
        node.left = newNode;                     // if the current node's left is empty, then insert the new node at the current node's left 
      } else {
        this.insertNode(node.left, newNode)      // if the current node's left is not empty, then recursively call insertNode to find appropriate node position for insertion 
      }
    } else {                                     // if the new node's data > current node data, then insert the node in the right sub tree
      if (node.right === null) {
        node.right = newNode;                    // if the current node's right is empty, then insert the new node at the current node's right 
      } else {
        this.insertNode(node.right, newNode)     // if the current node's right is not empty, then recursively call insertNode to find appropriate node position for insertion 
      }
    }
  }
}

const BST = new BinarySearchTree();    // creating a new BST object using new keyword and the BinarySearchTree class
BST.insert(1);                         // inserting nodes
BST.insert(3);
BST.insert(2);
BST.insert(6);
BST.insert(5);
BST.insert(4);
BST.insert(0);
console.log(BST);

// Binary Search Tree Traversals

// Inorder Traversal
const inorder = (root) => {
  if (root) {
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
  }
}
inorder(BST.root);

// Pre-order Traversal
const preorder = (root) => {
  if (root) {
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
  }
}
preorder(BST.root);

// Post-order Traversal
const postorder = (root) => {
  if (root) {
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
  }
}
postorder(BST.root);

// -------------------------------------------------------------------

// Closure - A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// Closure - A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
const counterCounting = function () {    // closure eg - 1
  let count = 0;                     
                            
  return function () {
    count++;                             // closure
    console.log(`${count} count`);
  };
};
const counter = counterCounting(); 
counter();
counter();
counter();

let f;                                  // closure eg - 2
const g = function() {
    const a = 22;
    f = function() {
        console.log(a * 2);            // closure
    };
};

g();
f();