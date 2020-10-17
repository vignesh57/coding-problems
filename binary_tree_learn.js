//binary_tree_learn.js

class BinaryTreeNode2{
    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
setLeft(value){
        this.left = new BinaryTreeNode2(value);
        return this.left;
    }

setRight(value){
        this.right = new BinaryTreeNode2(value);
        return this.right;
    }
}

class BinaryTreeNode{
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
}

  
function visitNode(node){
    if(node!=null) console.log(`Node: ${node.value}`);
    if(node.left != null) visitNode(node.left);
    else if(node.right != null) visitNode(node.right);
    else console.log("Done traversing. None further."); 
}

function isBalanced(treeRoot) {

    // A tree with no nodes is superbalanced, since there are no leaves!
    if (!treeRoot) {
      return true;
    }
  
    const depths = []; // We short-circuit as soon as we find more than 2
  
    // Nodes will store pairs of a node and the node's depth
    const nodes = [];
    nodes.push([treeRoot, 0]);
  
    while (nodes.length) {
       
      // Pop a node and its depth from the top of our stack
      const nodePair = nodes.pop();
      console.log(`nodePair: ${nodePair}`);  

      const node = nodePair[0];
      const depth = nodePair[1];
      console.log(`Depth: ${depths}`); 
      if (!node.left && !node.right) {
  
        // Сase: we found a leaf
        // We only care if it's a new depth
        if (depths.indexOf(depth) < 0) {
          depths.push(depth);
  
          // Two ways we might now have an unbalanced tree:
          //   1) More than 2 different leaf depths
          //   2) 2 leaf depths that are more than 1 apart
          if (
            (depths.length > 2)
            || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
          ) {
            return false;
          }
        }
      } else {
  
        // Case: this isn't a leaf - keep stepping down
        if (node.left) {
          nodes.push([node.left, depth + 1]);
        }
        if (node.right) {
          nodes.push([node.right, depth + 1]);
        }
      }
    }
  
    return true;
  }

let a = new BinaryTreeNode2(10);
let b = a.setLeft(8);
let c = a.setRight(12);

let d = b.setLeft(6);
let e = b.setRight(7);

let f = c.setLeft(11);
let g = c.setRight(13);

let h = d.setLeft(4);
let i = d.setRight(5);

//console.log(`aa ${aa.value} aa.left ${aa.left.value} aa.right ${aa.right.value} `);
//visitNode(a);

// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both leaves at the same depth';
treeRoot = new BinaryTreeNode(3);
leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by one';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'leaf heights differ by two';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'three leaves total';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both subtrees superbalanced';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'both subtrees superbalanced two';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
leftNode.insertLeft(3);
leftNode.insertRight(7).insertRight(8);
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'three leaves at different levels';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);
leftLeft = leftNode.insertLeft(3);
leftNode.insertRight(4);
leftLeft.insertLeft(5);
leftLeft.insertRight(6);
treeRoot.insertRight(7).insertRight(8).insertRight(9).insertRight(10);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'only one node';
treeRoot = new BinaryTreeNode(1);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'linked list tree';
treeRoot = new BinaryTreeNode(1);
treeRoot.insertRight(2).insertRight(3).insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}