"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEvents = exports.displayLists = exports.createList = void 0;

var _events = require("./events.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function List(description, completed, index) {
  _classCallCheck(this, List);

  this.description = description;
  this.completed = completed;
  this.index = index;
};

var createList = function createList(list) {
  var divContainer = document.createElement('div');
  var li = document.createElement('li');
  var checkList = list.completed === true ? 'checked' : '';
  var checkClass = list.completed === true ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.innerHTML = "\n    <label>\n      <input class=\"checkbox\" ".concat(checkList, " type=\"checkbox\">\n      <input class=\"des-task ").concat(checkClass, "\" type=\"text\" value=\"").concat(list.description, ">\n      <input type=\"hidden\" class=\"\" value=\"").concat(task.index, "\">\n    </label>\n    <i class=\"fas fa-ellipsis-v\"></i>\n    <i class=\"far fa-trash-alt\"></i>");
  divContainer.appendChild(li);
  return divContainer;
};

exports.createList = createList;

var displayLists = function displayLists(taskList) {
  var taskUl = document.querySelector('.task-placeholder');
  taskList.forEach(function (element) {
    var div = createList(element);
    taskUl.appendChild(div);
  });
};

exports.displayLists = displayLists;

var setEvents = function setEvents() {
  (0, _events.dragEvent)();
  (0, _events.editEvent)();
  (0, _events.completeEvent)();
  (0, _events.addNewEvent)();
  (0, _events.deleteListEvent)();
  (0, _events.deleteAllEvent)();
};

exports.setEvents = setEvents;