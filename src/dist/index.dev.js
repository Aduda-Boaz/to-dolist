"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _lodash = _interopRequireWildcard(require("lodash"));

require("./styles.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var listItems = [{
  description: 'Go to the gym',
  completed: false,
  index: 0
}, {
  description: 'Prepare breakfast',
  completed: false,
  index: 1
}, {
  description: 'Wash dishes',
  completed: false,
  index: 2
}];

var createList = function createList(list) {
  var li = document.createElement('li');
  li.innerHTML = "\n  <li class=\"tasks-itm\">\n    <label class=\"tasks-lb d-flex\">\n      <input type=\"checkbox\" value=\"".concat(list.completed, "\">\n      <p class=\"des-task\">").concat(list.description, "</p>\n    </label>\n    <i class=\"fas fa-ellipsis-v\"></i>\n  </li>");
  return li;
};

var displayLists = function displayLists(taskList) {
  var taskUl = document.querySelector('.task-placeholder');
  taskList.forEach(function (element) {
    var li = createList(element);
    taskUl.appendChild(li);
  });
};

window.onload = displayLists(listItems);