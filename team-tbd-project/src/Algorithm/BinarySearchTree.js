// Node class
class Node {
  //data structure example
  // {
  //  user_schedule_id: 1,
  //  event_title: "Work",
  //  start_date_time: "2020-11-04T11:30:30.057Z",
  //  end_date_time: "2020-11-04T20:30:30.057Z",
  //  r_rule: "RRULE:INTERVAL=1;FREQ=DAILY;COUNT=27",
  //  ex_dates: null,
  //  user_id: 1,
  // }

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class
class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  countLeftNodes(node) {
    if (node !== null && node !== undefined)
      return this.inorderArray(node.left, []).length;
    return 0;
  }

  countRightNodes(node) {
    if (node !== null && node !== undefined)
      return this.inorderArray(node.right, []).length;
    return 0;
  }

  // insert(data)
  // helper method which creates a new node to be inserted and calls insertNode
  // if the tree has 5 or more nodes on one side than the other, rearrange the nodes.
  insert(data) {
    // Creating a node and initailising
    // with data
    var newNode = new Node(data);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) this.root = newNode;
    // find the correct position in the
    // tree and add the node
    else this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data.start_date_time < node.data.start_date_time) {
      // if left is null insert node here
      if (node.left === null || node.left === undefined) node.left = newNode;
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null || node.right === undefined) node.right = newNode;
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }

  // remove(data)
  // helper method that calls the
  // removeNode with a given data
  remove(data) {
    // root is re-initialized with 2
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  // Method to remove node with a
  // given data
  // it recur over the tree to find the
  // data and removes it
  removeNode(node, startDate) {
    // if the root is null then tree is
    // empty
    if (node === null || node === undefined) return null;
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (startDate < node.data.start_date_time) {
      node.left = this.removeNode(node.left, startDate);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (startDate > node.data.start_date_time) {
      node.right = this.removeNode(node.right, startDate);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null || node.left === undefined) {
        node = node.right;
        return node;
      } else if (node.right === null || node.right === undefined) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // Helper function
  // findMinNode()
  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null || node.left === undefined) return node;
    else return this.findMinNode(node.left);
  }

  // Helper function
  // findMaxNode()
  // finds the maximum node in tree
  // searching starts from given node
  findMaxNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.right === null || node.right === undefined) return node;
    else return this.findMaxNode(node.right);
  }

  // getRootNode()
  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  // inorder(node)
  // Performs inorder traversal of a tree

  inorder(node) {
    if (node !== undefined && node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  inorderArray(node, arr) {
    if (node !== undefined && node !== null) {
      this.inorderArray(node.left, arr);
      arr.push(node.data);
      this.inorderArray(node.right, arr);
    }

    return arr;
  }

  // preorder(node)
  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== undefined && node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // postorder(node)
  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== undefined && node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // search(node, data)
  // search for a node with given data
  search(node, data) {
    // if trees is empty return null
    if (node === null || node === undefined) return null;
    // if data is less than node's data
    // move left
    else if (data.start_date_time < node.data.start_date_time)
      return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (
      data.start_date_time > node.data.start_date_time ||
      data.end_date_time !== node.data.end_date_time
    )
      return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }

  rearrangeTree(arr, bst) {
    if (arr.length <= 0) {
      return;
    }
    var rightSide = [];
    var leftSide = [];

    bst.insert(arr[Math.round((arr.length - 1) / 2)]);
    rightSide = arr.slice(Math.round((arr.length - 1) / 2) + 1, arr.length);
    leftSide = arr.slice(0, Math.round((arr.length - 1) / 2));

    this.rearrangeTree(rightSide, bst);
    this.rearrangeTree(leftSide, bst);
    return bst;
  }
}
