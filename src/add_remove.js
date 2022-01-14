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
      <input class="des-task ${checkClass}" type="text" value="${list.description}>
      <input type="hidden" class="" value="${task.index}">
    </label>
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt"></i>`;
  
  divContainer.appendChild(li);

  return divContainer;
};

export const displayLists = (taskList) => {
  const taskUl = document.querySelector('.task-placeholder');

  taskList.forEach((element) => {
    const div = createList(element);
    taskUl.appendChild(div);
  });
};

export const setEvents = () => {
  dragEvent();
  editEvent();
  completeEvent();
  addNewEvent();
  deleteListEvent();
  deleteAllEvent();
}


