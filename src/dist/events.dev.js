"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewEvent = void 0;

var _add_remove = require("./add_remove");

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
  input.addEventListener('enter', function (e) {});
};

exports.addNewEvent = addNewEvent;