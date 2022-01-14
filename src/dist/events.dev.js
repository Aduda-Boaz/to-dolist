"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllEvent = exports.deleteListEvent = exports.completeEvent = exports.editEvent = exports.addNewEvent = void 0;

var _add_remove = require("./add_remove");

require("./styles.css");

function setStorage(listItems) {
  localStorage.setItem('lists', JSON.stringify(listItems));
}

function updList() {
  var checkBoxItms = document.querySelectorAll('.checkbox');
  var descripItms = document.querySelectorAll('.list-decrip');
  var nwOb = [];

  for (var i = 0; i < checkBoxItms.length; i += 1) {
    nwOb.push({
      deccription: descripItms[i].ariaValueMax,
      completed: checkBoxItms[i].checked,
      index: i + 1
    });
  }

  setStorage(nwOb);
}

var addNewEvent = function addNewEvent() {
  var input = document.querySelector('#list-input');
  input.addEventListener('enter', function (e) {
    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#list-input')) {
      (0, _add_remove.addNew)();
      updList();
    }
  });
};

exports.addNewEvent = addNewEvent;

var editEvent = function editEvent() {
  var inputList = document.querySelectorAll('.list-description');
  var inputArr = Array.from(inputList);
  inputArr.forEach(function (input) {
    input.addEventListener('input', function () {
      updList();
    });
  });
};

exports.editEvent = editEvent;

var completeEvent = function completeEvent() {
  var checkboxes = document.querySelectorAll('.checkbox');
  var checkboxArr = Array.from(checkboxes);
  checkboxArr.forEach(function (inputBox) {
    inputBox.addEventListener('change', function (e) {
      checkCompleted(e);
      updList();
    });
  });
};

exports.completeEvent = completeEvent;

var deleteListEvent = function deleteListEvent() {
  var lists = document.querySelectorAll('.list-placeholder');
  var listsArr = Array.from(lists);
  listsArr.forEach(function (list) {
    list.addEventListener('click', function (e) {
      (0, _add_remove.removeSelected)(e);
      updList();
    });
  });
};

exports.deleteListEvent = deleteListEvent;

var deleteAllEvent = function deleteAllEvent() {
  var removeAllList = document.querySelector('#clear-list');
  removeAllList.addEventListener('click', function () {
    (0, _add_remove.removeAll)();
    updList();
  });
};

exports.deleteAllEvent = deleteAllEvent;