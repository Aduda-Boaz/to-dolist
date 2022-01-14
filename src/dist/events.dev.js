"use strict";

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