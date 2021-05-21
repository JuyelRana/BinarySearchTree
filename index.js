function BST (value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value){
  if(value <= this.value){
    if(this.left === null){
      this.left = new BST(value);
    } else{
      this.left.insert(value);
    }
  }else if(value > this.value){
    if(this.right === null){
      this.right = new BST(value);
    }else{
      this.right.insert(value);
    }
  }
}

BST.prototype.contains = function(value){
  if(value === this.value) return true;
  else if(value < this.value){
    if(this.left === null) return false;
    else return this.left.contains(value);
  }
  else if(value > this.value){
    if(this.right === null) return false;
    else return this.right.contains(value);
  }
}

// In Order Traversal (left, root, right)
// Pre Order Traversal (root, left, right)
// Post Order Traversal (left, right, root)
BST.prototype.depthFirstSearchTraversal = function(iteratorFunc, order){
  if(order === 'pre-order') iteratorFunc(this.value);
  if(this.left) this.left.depthFirstSearchTraversal(iteratorFunc, order);
  if(order === 'in-order') iteratorFunc(this.value);
  if(this.right) this.right.depthFirstSearchTraversal(iteratorFunc, order);
  if(order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  let queue = [this];
  while(queue.length){
    let treeNode = queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinValue = function(){
  if(this.left) return this.left.getMinValue();
  else return this.value;
};

BST.prototype.getMaxValue = function(){
  if(this.right) return  this.right.getMaxValue();
  else return this.value;
}

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


// bst.depthFirstSearchTraversal(log, 'post-order');


function log(value){
  // console.log(value);
}

function logBFST(node){
  // console.log(node.value);
}

// bst.breadthFirstTraversal(logBFST);

console.log("Min: "+ bst.getMinValue());
console.log("max: "+ bst.getMaxValue());