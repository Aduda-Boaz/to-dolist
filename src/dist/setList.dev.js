"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setList;

var setChecked = function setChecked(item) {
  if (item) {
    return 'checked';
  }

  return '';
};

var setClass = function setClass(item) {
  if (item) {
    return 'overlined';
  }

  return '';
};

function setList(description, completed, index) {
  var element = document.createElement('li');
  var list = document.getElementById('new-list');
  element.innerHTML = "\n    <input type=\"checkbox\" ".concat(setChecked(completed), " id=\"").concat(index, "-check\" value=\"").concat(index, ">\n    <p id=\"").concat(index, "-description\" class=\"").concat(setClass(completed), "\">").concat(description, "</p>\n    <div class=\"dropdown\">\n    <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton-").concat(index, "\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n    <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n    <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n  </svg></button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton-").concat(index, "\">\n        <li><a class=\"dropdown-item dropdown-editor\" id=\"edit-").concat(index, "\" href=\"#\">Edit</a></li>\n        <li><a class=\"dropdown-item dropdown-remover\" id=\"remove-btn-").concat(index, "\" href=\"#\">Remove</a></li>\n      </ul>\n  </div> ");
  element.classList.add('task-element', 'd-flex', 'align-content-center', 'justify-content-between', 'py-3');
  element.setAttribute('id', index);
  list.appendChild(element);
}