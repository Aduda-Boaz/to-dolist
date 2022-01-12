"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function component() {
  var element = document.createElement('div');
  element.innerHTML = _lodash["default"].join(['Hello', 'To-Do-List'], ' ');
  return element;
}

document.body.appendChild(component());