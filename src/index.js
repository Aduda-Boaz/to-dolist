import _, { create } from 'lodash';
import './styles.css';

const listItems = [
  {
    description: 'Go to the gym',
    completed: false,
    index: 0,
  },
  {
    description: 'Prepare breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash dishes',
    completed: false,
    index: 2,
  },
];

const createList = (list) => {
  const li = document.createElement('li');

  li.innerHTML = `
  <li class="tasks-itm">
    <label class="tasks-lb d-flex justify-content-between align-content-center">
      <input type="checkbox" value="${list.completed}">
      <p class="des-task">${list.description}</p>
    </label>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
  </svg>
  </li>`;

  return li;
};

const displayLists = (taskList) => {
  const taskUl = document.querySelector('.task-placeholder');

  taskList.forEach((element) => {
    const li = createList(element);
    taskUl.appendChild(li);
  });
};

window.onload = displayLists(listItems);