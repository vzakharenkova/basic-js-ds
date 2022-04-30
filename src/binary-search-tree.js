const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addWithin(this.treeRoot, data);
    function addWithin(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
    
  }

  has(data) {
    function searchWithin (node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
    return searchWithin(this.treeRoot, data);
  }

  find(data) {
    function search (node) {
      if (node === null) return null;
      if (node.data === data) return node;
      if (node.data > data) {
        return search(node.left);
      } else {
        return search(node.right);
      }
    }
    return search(this.treeRoot);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) return null;
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {if (!node.left && !node.right) {
        return null;
      }
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minRight = node.right;
      while(minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = removeNode(node.right, minRight.data);
      return node;
    }
    return removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) return;
    let node = this.treeRoot;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.treeRoot) return;
    let node = this.treeRoot;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }

}
module.exports = {
  BinarySearchTree
};