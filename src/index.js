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
    <label class="tasks-lb d-flex">
      <input type="checkbox" value="${list.completed}">
      <p class="des-task">${list.description}</p>
    </label>
    <i class="fas fa-ellipsis-v"></i>
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