// Node class
class Node {
  //data structure example
  // {
  //  event_name: 'Website Re-Design Plan', <- Name of the event
  //  start_time: new Date(2018, 5, 25, 9, 35), <- Starting date/hour of the event
  //  end_time: new Date(2018, 5, 25, 11, 30), <- Ending date/hour of the event
  //  event_days: "LWV", <- Days of the event
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
    this.rootL = { day: "L", root: null }; //Monday schedule
    this.rootM = { day: "M", root: null }; //Tuesday schedule
    this.rootW = { day: "W", root: null }; //Wednesday schedule
    this.rootJ = { day: "J", root: null }; //Thursday schedule
    this.rootV = { day: "V", root: null }; //Friday schedule
    this.rootS = { day: "S", root: null }; //Saturday schedule
    this.rootD = { day: "D", root: null }; //Sunday schedule

    this.roots = [
      this.rootL,
      this.rootM,
      this.rootW,
      this.rootJ,
      this.rootV,
      this.rootS,
      this.rootD,
    ];
  }

  // function to be implemented
  // insert(data)
  // helper method which creates a new node to
  // be inserted and calls insertNode
  insert(data) {
    // Creating a node and initailising
    // with data
    var newNode = new Node(data);

    // root is null then node will
    // be added to the tree and made root.
    if (data != null) {
      this.roots.forEach((rootDay) => {
        if (data.event_days.toUpperCase().contains(rootDay.day)) {
          if (rootDay.root === null) rootDay.root = newNode;
          // find the correct position in the
          // tree and add the node
          else this.insertNode(rootDay.root, newNode);
        }
      });
    }
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data.start_time < node.data.start_time) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }

  // remove(data)
  // helper method that calls the
  // removeNode with a given hour and a given day (L,M,W,J,V,S,D).
  remove(hour, day) {
    this.roots.forEach((rootDay) => {
      if (rootDay.day == day.toUpperCase()) {
        // root is re-initialized with
        // root of a modified tree.
        rootDay = this.removeNode(rootDay, hour);
        break;
      }
    });
  }

  // Method to remove node with a
  // given hour
  // it recur over the tree to find the
  // data and removes it
  removeNode(node, hour) {
    // if the root is null then tree is
    // empty
    if (node === null) return null;
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (hour < node.data.start_time) {
      node.left = this.removeNode(node.left, hour);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (hour > node.data.start_time) {
      node.right = this.removeNode(node.right, hour);
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
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minumum node of the right subtree
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
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // getRootNode()
  // returns root of the tree
  getRootNode() {
    return this.roots;
  }

  // inorder(node)
  // Performs inorder traversal of a tree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // preorder(node)
  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // postorder(node)
  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // search(node, startDate, endDate)
  // search for a node with given data/startDate, endDate
  search(node, startDate, endDate) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (startDate < node.data.start_time && endDate < node.data.end_time)
      return this.search(node.left, startDate, endDate);
    // if data is less than node's data
    // move left
    else if (startDate > node.data.start_time && endDate > node.data.end_time)
      return this.search(node.right, startDate, endDate);
    // if data is equal to the node data
    // return node
    else return node;
  }
}
