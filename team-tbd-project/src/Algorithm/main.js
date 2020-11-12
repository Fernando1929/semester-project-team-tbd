import alasql from "alasql";
import rrule from "rrule";
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
    // if (
    //   Math.abs(
    //     this.countLeftNodes(this.root) - this.countRightNodes(this.root)
    //   ) >= 5
    // ) {
    //   this.root = this.rearrangeTree(
    //     this.inorderArray(this.getRootNode(), []),
    //     new BinarySearchTree()
    //   ).getRootNode();
    // }
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

// {
//   user_schedule_id: ruleInfo.userScheduleId,
//   event_title: ruleInfo.eventTitle,
//   start_date_time: new Date(ruleElements[index]).toJSON(),
//   end_date_time: endDate.toJSON(),
//   r_rule: null,
//   ex_dates: null,
//   user_id: ruleInfo.userId,
// }
function getUserFreeHoursTree(
  user,
  startingDay,
  finishDay,
  amountHours,
  amountMinutes
) {
  var freeHoursTree = new BinarySearchTree();
  var data = null;

  if (user.schedule.length == 0) {
    freeHoursTree.insert({
      user_schedule_id: 1,
      event_title: "Free",
      start_date_time: startingDay,
      end_date_time: finishDay,
      r_rule: null,
      ex_dates: null,
      user_id: user.id,
    });
  } else {
    var countId = 1;
    var hours = diffHoursAndMinutes(
      startingDay,
      user.schedule[0].start_date_time
    );

    if (hours[0] + hours[1] / 60 >= amountHours + amountMinutes / 60) {
      data = {
        user_schedule_id: countId,
        event_title: "Free",
        start_date_time: startingDay,
        end_date_time: user.schedule[0].start_date_time,
        r_rule: null,
        ex_dates: null,
        user_id: user.id,
      };
      countId++;
      freeHoursTree.insert(data);
    }
    data = null;

    for (let i = 0; i < user.schedule.length - 1; i++) {
      hours = diffHoursAndMinutes(
        user.schedule[i].end_date_time,
        user.schedule[i + 1].start_date_time
      );

      if (hours[0] + hours[1] / 60 >= amountHours + amountMinutes / 60) {
        data = {
          user_schedule_id: countId,
          event_title: "Free",
          start_date_time: user.schedule[i].end_date_time,
          end_date_time: user.schedule[i + 1].start_date_time,
          r_rule: null,
          ex_dates: null,
          user_id: user.id,
        };
        countId++;
        freeHoursTree.insert(data);
      }
    }

    hours = diffHoursAndMinutes(
      user.schedule[user.schedule.length - 1].end_date_time,
      finishDay
    );

    if (hours[0] + hours[1] / 60 >= amountHours + amountMinutes / 60) {
      data = {
        user_schedule_id: countId,
        event_title: "Free",
        start_date_time: user.schedule[user.schedule.length - 1].end_date_time,
        end_date_time: finishDay,
        r_rule: null,
        ex_dates: null,
        user_id: user.id,
      };
      freeHoursTree.insert(data);
    }
  }

  return freeHoursTree;
}

/**
 * This function takes a schedule that has events of type "Recurring appointments" to convert it and returns a schedule with all objects of type "One-time appointments".
 * @param {JSONschedule} data Schedule to be analyzed/converted
 * @param {JSONDate} startingDay First possible date for the meeting.
 * @param {JSONDate} finishDay Last possible date for the meeting.
 * @return {JSONschedule} A schedule with all objects of type "One-time appointments"
 *
 * Example: User wants a meeting between November 15, 2020 and November 20, 2020.
 * startingDay is going to be "2020-11-15T04:00:00.057Z" and finishDay is going to be "2020-11-20T04:00:00.057Z".
 * In other words, the function will return all the dates between November 15 and November 20.
 */
function convertToOneTimeAppointments(data, startingDay, finishDay) {
  alasql.fn.betweenDates = function (start, end) {
    return (
      start >= startingDay &&
      start <= finishDay &&
      end <= finishDay &&
      end >= startingDay
    );
  };
  //Filter all events that have r_rule. In other words, the recurring appointments that must be transformed to one-time appointments.
  var recurringAppointment = alasql(
    "SELECT * FROM ? WHERE r_rule IS NOT NULL",
    [data]
  );
  //Filter all events that do not have r_rule. In other words, one-time appointments that don't need any changes.
  var tempResult = alasql(
    "SELECT * FROM ? WHERE r_rule IS NULL AND betweenDates(start_date_time, end_date_time)",
    [data]
  );
  var finalResult = [];

  tempResult.forEach((event) => {
    finalResult.push(event);
  });

  recurringAppointment.forEach((event) => {
    var tempStr = "";
    var weekDay = null;
    var freq = null;
    var count = null;
    var interval = null;
    var until = null;

    var duration = diffHoursAndMinutes(
      event.start_date_time,
      event.end_date_time
    );

    if (event.r_rule.indexOf("BYDAY=") > 0) {
      tempStr = event.r_rule.substring(event.r_rule.indexOf("BYDAY=") + 6);
      weekDay =
        tempStr.indexOf(";") > 0
          ? tempStr.substring(0, tempStr.indexOf(";"))
          : tempStr;
      if (weekDay.split(",")) {
        weekDay = weekDay.split(",");
        var tempArr = [];

        weekDay.forEach((day) => {
          switch (day) {
            case "MO":
              tempArr.push(1);
              break;
            case "TU":
              tempArr.push(2);
              break;
            case "WE":
              tempArr.push(3);
              break;
            case "TH":
              tempArr.push(4);
              break;
            case "FR":
              tempArr.push(5);
              break;
            case "SA":
              tempArr.push(6);
              break;
            case "SU":
              tempArr.push(7);
              break;
          }
        });
      }

      tempStr = "";
    }

    if (event.r_rule.indexOf("FREQ=") > 0) {
      tempStr = event.r_rule.substring(event.r_rule.indexOf("FREQ=") + 5);
      freq =
        tempStr.indexOf(";") > 0
          ? tempStr.substring(0, tempStr.indexOf(";"))
          : tempStr;

      switch (freq) {
        case "YEARLY":
          freq = rrule.RRule.YEARLY;
          break;
        case "MONTHLY":
          freq = rrule.RRule.MONTHLY;
          break;
        case "WEEKLY":
          freq = rrule.RRule.WEEKLY;
          break;
        case "DAILY":
          freq = rrule.RRule.DAILY;
          break;
        case "HOURLY":
          freq = rrule.RRule.HOURLY;
          break;
        case "MINUTELY":
          freq = rrule.RRule.MINUTELY;
          break;
        case "SECONDLY":
          freq = rrule.RRule.SECONDLY;
          break;
        default:
          freq = null;
      }
      tempStr = "";
    }

    if (event.r_rule.indexOf("COUNT=") > 0) {
      tempStr = event.r_rule.substring(event.r_rule.indexOf("COUNT=") + 6);
      count =
        tempStr.indexOf(";") > 0
          ? tempStr.substring(0, tempStr.indexOf(";"))
          : tempStr;
      tempStr = "";
    }

    if (event.r_rule.indexOf("INTERVAL=") > 0) {
      tempStr = event.r_rule.substring(event.r_rule.indexOf("INTERVAL=") + 9);
      interval =
        tempStr.indexOf(";") > 0
          ? tempStr.substring(0, tempStr.indexOf(";"))
          : tempStr;
      interval = parseInt(interval);
      tempStr = "";
    }

    if (event.r_rule.indexOf("UNTIL=") > 0) {
      tempStr = event.r_rule.substring(event.r_rule.indexOf("UNTIL=") + 6);
      until =
        tempStr.indexOf(";") > 0
          ? tempStr.substring(0, tempStr.indexOf(";"))
          : tempStr;
      until = rrule.rrulestr("DTSTART:" + until);
      until = until.origOptions.dtstart;
      tempStr = "";
    }

    //In order to be able to calculate all the dates of a recurring appointment, an RRule object is created based on the r_rule property of that appointment.
    const rule = new rrule.RRule({
      freq: freq,
      interval: interval,
      count: count,
      byweekday: weekDay,
      dtstart: new Date(event.start_date_time),
      until: until,
    });

    //rule.all() will return all dates.
    var ruleElements = rule.all();
    var ruleInfo = {
      eventTitle: event.event_title,
      userScheduleId: event.user_schedule_id,
      userId: event.user_id,
    };

    //Creates an array of appointment type objects, equal to the one given by the API, with all the one-time appointment recurrences of the given appointment.
    for (let index = 0; index < ruleElements.length; index++) {
      //Calculates the end time of the appointment
      var endDate = new Date(ruleElements[index]);
      endDate.setTime(
        endDate.getTime() + duration[0] * 60 * 60 * 1000 + duration[1] * 60000
      );

      if (
        ruleElements[index].toJSON() >= startingDay &&
        ruleElements[index].toJSON() <= finishDay &&
        endDate.toJSON() <= finishDay &&
        endDate.toJSON() >= startingDay
      )
        finalResult.push({
          user_schedule_id: ruleInfo.userScheduleId,
          event_title: ruleInfo.eventTitle,
          start_date_time: new Date(ruleElements[index]).toJSON(),
          end_date_time: endDate.toJSON(),
          r_rule: null,
          ex_dates: null,
          user_id: ruleInfo.userId,
        });
    }
  });

  return finalResult.sort(function (a, b) {
    if (a.start_date_time > b.start_date_time) return 1;
    else return -1;
  });
}

/**
 * Calculate the time difference between two dates
 * @param {Date} dt2 Oldest date
 * @param {Date} dt1 Most recent date
 * @return {Array} Returns an array of integers,
 * the first element [0] is the number of hours between the two dates,
 * the second [1] is the number of minutes between the two dates.
 *
 * Example: dt1 = "2020-11-13T20:00:00.000Z", dt2 = '2020-11-13T21:30:00.000Z',
 * the result will be [1, 30]. In other words, there is a difference of 1 hour and 30 minutes between both dates.
 */
function diffHoursAndMinutes(dt2, dt1) {
  dt1 = new Date(dt1);
  dt2 = new Date(dt2);
  var diffHours = (dt2.getTime() - dt1.getTime()) / 1000;
  diffHours /= 60 * 60;
  var diffMinutes = (dt2.getTime() - dt1.getTime()) / 1000;
  diffMinutes /= 60;
  if (Math.abs(parseInt(diffHours) * 60) <= Math.abs(diffMinutes)) {
    diffMinutes = Math.abs(parseInt(diffHours) * 60) - Math.abs(diffMinutes);
  }
  return [Math.abs(parseInt(diffHours)), Math.abs(Math.round(diffMinutes))];
}

//Testing purposes

var userSchedule1 = [
  {
    user_schedule_id: 1,
    event_title: "Work",
    start_date_time: "2020-11-04T11:30:30.057Z",
    end_date_time: "2020-11-04T20:30:30.057Z",
    r_rule: "RRULE:INTERVAL=1;FREQ=DAILY;COUNT=27",
    ex_dates: null,
    user_id: 1,
  },
  {
    user_schedule_id: 2,
    event_title: "Event",
    start_date_time: "2020-11-04T20:30:18.820Z",
    end_date_time: "2020-11-04T21:00:18.820Z",
    r_rule: null,
    ex_dates: null,
    user_id: 1,
  },
  {
    user_schedule_id: 3,
    event_title: "Event 2",
    start_date_time: "2020-11-05T22:00:00.000Z",
    end_date_time: "2020-11-05T22:30:00.000Z",
    r_rule: "RRULE:INTERVAL=2;FREQ=DAILY;COUNT=10",
    ex_dates: null,
    user_id: 1,
  },
  {
    user_schedule_id: 7,
    event_title: "Family",
    start_date_time: "2020-11-10T21:00:00.000Z",
    end_date_time: "2020-11-10T21:30:00.000Z",
    r_rule: "RRULE:INTERVAL=3;FREQ=DAILY;UNTIL=20201114T213000Z",
    ex_dates: null,
    user_id: 1,
  },
];

var userSchedule2 = [
  {
    user_schedule_id: 4,
    event_title: "Work",
    start_date_time: "2020-11-02T14:00:33.542Z",
    end_date_time: "2020-11-02T22:00:33.542Z",
    r_rule: "RRULE:INTERVAL=1;FREQ=DAILY;COUNT=27",
    ex_dates: null,
    user_id: 2,
  },
  {
    user_schedule_id: 5,
    event_title: "Class",
    start_date_time: "2020-11-02T22:30:33.542Z",
    end_date_time: "2020-11-02T23:30:33.542Z",
    r_rule: "RRULE:INTERVAL=3;FREQ=DAILY;COUNT=27",
    ex_dates: null,
    user_id: 2,
  },
];

// var userSc = convertToOneTimeAppointments(
//   userSchedule1,
//   "2020-11-09T12:00:00.057Z",
//   "2020-11-20T20:30:30.057Z"
// );

// //console.log(userSc);

// var user = {
//   schedule: userSc,
//   id: 1,
// };
// var userFreeSc = getUserFreeHoursTree(
//   user,
//   "2020-11-09T12:00:00.057Z",
//   "2020-11-20T20:30:30.057Z",
//   1,
//   0
// );

// console.log(userFreeSc.inorderArray(userFreeSc.getRootNode(), []));

// var userSc = convertToOneTimeAppointments(
//   userSchedule2,
//   "2020-11-09T12:00:00.057Z",
//   "2020-11-20T20:00:30.057Z"
// );

// //console.log(userSc);

// var user = {
//   schedule: userSc,
//   id: 2,
// };
// var userFreeSc = getUserFreeHoursTree(
//   user,
//   "2020-11-09T12:00:00.057Z",
//   "2020-11-20T20:00:30.057Z",
//   1,
//   30
// );

// console.log(userFreeSc.inorderArray(userFreeSc.getRootNode(), []));
// console.log(userSc.findMaxNode(userSc.getRootNode()));

// var dateTest = new Date("2020-11-15T04:00:00.057Z");
// console.log(dateTest.toLocaleString());
// console.log(getUserFreeHoursTree(user, userSchedule, 1));
