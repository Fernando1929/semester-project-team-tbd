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
        if (newNode.data.event_days.toUpperCase().indexOf(rootDay.day) > -1) {
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

function getUserFreeHours(U, US, amountH) {
  freeHoursArr = [];
  if (US.length == 0) {
    freeHoursArr.push({
      title: "Free",
      startDate: U.availableStartHour,
      endDate: U.availableEndHour,
      hours: Math.abs(U.availableStartHour - U.availableEndHour) / 36e5, //amount of free hours.
    });
  } else {
    var hours = Math.abs(U.availableStartHour - US[0].startDate) / 36e5;
    if (hours >= amountH) {
      freeHoursArr.push({
        title: "Free",
        startDate: U.availableStartHour,
        endDate: US[0].startDate,
        hours: hours, //calculate the amount of free hours.
      });
    }

    for (let i = 0; i < US.length() - 2; i++) {
      hours = Math.abs(US[i].endDate - US[i + 1].startDate) / 36e5;
      if (hours >= amountH) {
        freeHoursArr.push({
          title: "Free",
          startDate: US[i].endDate,
          endDate: US[i + 1].startDate,
          hours: hours, //calculate the amount of free hours.
        });
      }
    }

    hours = Math.abs(US[US.length() - 1].endDate - U.availableEndHour) / 36e5;
    if (hours >= amountH) {
      freeHoursArr.push({
        title: "Free",
        startDate: US[US.length() - 1].endDate,
        endDate: U.availableEndHour,
        hours: hours, //calculate the amount of free hours.
      });
    }
  }
}

function getUserFreeHoursTree(U, US, amountH) {
  freeHoursTree = new BinarySearchTree();
  data = null;

  if (US.length == 0) {
    freeHoursTree.insert({
      event_name: "Free",
      start_time: U.availableStartHour,
      end_time: U.availableEndHour,
      event_days: U.availableDays,
      hours: Math.abs(U.availableStartHour - U.availableEndHour) / 36e5, //amount of free hours.
    });
  } else {
    console.log("Entre ELSE");
    var hours = Math.abs(U.availableStartHour - US[0].start_time) / 36e5;
    console.log(hours);
    if (hours >= amountH) {
      data = {
        event_name: "Free",
        start_time: U.availableStartHour,
        end_time: US[0].start_time,
        event_days: US[0].event_days,
        hours: hours, //calculate the amount of free hours.
      };
    }
    freeHoursTree.insert(data);
    data = null;

    for (let i = 0; i < US.length - 2; i++) {
      hours = Math.abs(US[i].end_time - US[i + 1].start_time) / 36e5;
      if (hours >= amountH) {
        data = {
          event_name: "Free",
          start_time: US[i].end_time,
          end_time: US[i + 1].start_time,
          event_days: US[i].event_days,
          hours: hours, //calculate the amount of free hours.
        };
        console.log(data);
        freeHoursTree.insert(data);
      }
    }

    hours = Math.abs(US[US.length - 1].end_time - U.availableEndHour) / 36e5;
    if (hours >= amountH) {
      data = {
        event_name: "Free",
        start_time: US[US.length - 1].end_time,
        end_time: U.availableEndHour,
        event_days: US[US.length - 1].event_days,
        hours: hours, //calculate the amount of free hours.
      };
    }
    freeHoursTree.insert(data);
  }

  return freeHoursTree;
}

user = {
  availableStartHour: "8:00",
  availableEndHour: "18:00",
  availableDays: "LMWJV",
};
userSchedule = [
  {
    event_name: "Stim",
    start_time: "8:25",
    end_time: "10:37",
    event_days: "M",
  },
  {
    event_name: "Daltfresh",
    start_time: "11:49",
    end_time: "13:03",
    event_days: "M",
  },
  {
    event_name: "Ventosanzap",
    start_time: "16:15",
    end_time: "16:55",
    event_days: "M",
  },
  {
    event_name: "Zoolab",
    start_time: "12:47",
    end_time: "16:12",
    event_days: "J",
  },
  {
    event_name: "Ventosanzap",
    start_time: "11:49",
    end_time: "15:18",
    event_days: "M",
  },
  {
    event_name: "Home Ing",
    start_time: "16:01",
    end_time: "15:34",
    event_days: "M",
  },
  {
    event_name: "Konklab",
    start_time: "11:20",
    end_time: "13:43",
    event_days: "W",
  },
  {
    event_name: "Bamity",
    start_time: "12:50",
    end_time: "15:45",
    event_days: "V",
  },
  {
    event_name: "Flexidy",
    start_time: "9:00",
    end_time: "13:15",
    event_days: "LWV",
  },
  {
    event_name: "Bamity",
    start_time: "11:27",
    end_time: "11:59",
    event_days: "M",
  },
];

function getHoursOrMinutes(data, inMinutes) {
  var startTime = data[0];
  var endTime = data[1];

  var s = startTime.split(":");
  var e = endTime.split(":");

  var end = parseInt(e[0]) * 60 + parseInt(e[1]);
  var start = parseInt(s[0]) * 60 + parseInt(s[1]);

  var resultMinutes = end - start; //time in minutes

  var resultHours =
    parseInt(resultMinutes / 60) +
    " hours " +
    (resultMinutes % 60) +
    " minutes";

  return inMinutes ? resultMinutes : resultHours;
}

// console.log(getUserFreeHoursTree(user, userSchedule, 1));
console.log(getHoursOrMinutes(["11:20", "13:43"], true));
