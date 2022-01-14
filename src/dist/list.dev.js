"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function List(description) {
  var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = arguments.length > 2 ? arguments[2] : undefined;

  _classCallCheck(this, List);

  this.description = description;
  this.completed = completed;
  this.index = index;
};

exports["default"] = List;