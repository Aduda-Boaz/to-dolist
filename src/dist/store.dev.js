"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setStorage;

function setStorage(listItems) {
  localStorage.setItem('lists', JSON.stringify(listItems));
}