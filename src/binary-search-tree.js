const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


module.exports = class BinarySearchTree {
  node = null;
  root() {
    return this.node
  }

  add(data) {
    this.node = addWithin(this.node, data);

    function addWithin(node, data) {
      if (!node) {
        return node = new Node(data);
        
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.node, data)

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return searchWithin(this.node, data)

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.node = removeNode(this.node, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        
        if (!node.left && !node.right) {
          
          return null;
        }

        if (!node.left) {
      
          node = node.right;
          return node;
        }

        if (!node.right) {
     
          node = node.left;
          return node;
        }

        
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.node) {
      return null;
    }

    let minValue = this.node;
    while (minValue.left) {
      minValue = minValue.left;
    }

    return minValue.data;
  }

  max() {
    if (!this.node) {
      return null;
    }

    let maxValue = this.node;
    while (maxValue.right) {
      maxValue = maxValue.right;
    }

    return maxValue.data;
  }

}