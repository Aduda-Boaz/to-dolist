import { dragEvent, editEvent, completeEvent, addNewEvent, deleteListEvent, deleteAllEvent } from './events.js';

class List {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const createList = (list) => {
  const divContainer = document.createElement('div');
  const li = document.createElement('li');
  const checkList = (list.completed === true) ? 'checked' : '';
  const checkClass = (list.completed === true) ? 'marked' : '';
  divContainer.classList.add('div-container');

  li.innerHTML = `
    <label>
      <input class="checkbox" ${checkList} type="checkbox">
      <input class="list-decrip ${checkClass}" type="text" value="${list.description}>
      <input type="hidden" class="" value="${list.index}">
    </label>
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt"></i>`;
  
  divContainer.appendChild(li);

  return divContainer;
};

export const displayLists = (taskList) => {
  const listUl = document.querySelector('.task-placeholder');

  taskList.forEach((element) => {
    const div = createList(element);
    listUl.appendChild(div);
  });
};

export const setEvents = () => {
  addNewEvent();
  editEvent();
  completeEvent();
  deleteListEvent();
  deleteAllEvent();
}

export const addNew = () => {
  const input = document.querySelector('#list-input');
  const listUl = document.querySelector('.list-placeholder');
  let listArr = [];

  if (localStorage.getItem('lists')) {
    listArr = JSON.parse(localStorage.getItem('lists'));
  }
  listArr.push(new List(input.value, false, listArr.length + 1));
  input.value = '';
  listUl.innerHTML = '';
  displayLists(listArr);
  setEvents();
}


export function removeSelected() {
  const listUl = document.querySelector('.list-placeholder');
  const remList = document.querySelectorAll('.marked');

  remList.forEach((element) => {
    const remDiv = element.parentElement.parentElement;
    listUl.removeChild(remDiv);
  });
}

export function removeAll() {
  const listUl = document.querySelectorAll('.list-placeholder');
  const remList = document.querySelectorAll('.marked');

  remList.forEach((element) => {
    const remDiv = element.parentElement.parentElement.parentElement;
    listUl.removeChild(remDiv);
  });
}