/* eslint no-restricted-globals: "off", curly: "error" */
import './styles.css';
import List from './list.js';
import setList from './setList.js';
import Storage from './store.js';

const addBtn = document.getElementById('add');
const removeAll = document.getElementById('clear');
const inputField = document.getElementById('new-item');
const storage = new Storage();

let lists = storage.getList();
localStorage.setItem('list', JSON.stringify(lists));

let listCounter = 1;
if (localStorage.getItem('list') == null) {
  listCounter = 4;
}

const counterIncreament = () => {
  const res = listCounter;
  listCounter += 1;
  return res;
};

const deleteAll = (id) => {
  const index = id.slice(7).toString() - 1;
  lists.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
};

const editEvent = (id) => {
  const index = id.slice(5).toString();
  const textField = document.getElementById(`${index}-description`);
  textField.innerHTML = '';
  const editField = document.createElement('input');
  editField.type = 'text';
  editField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      lists[index - 1].description = editField.value;
      localStorage.setItem('list', JSON.stringify(lists));
      textField.innerHTML = `${editField.value}`;
    }
  });
  textField.appendChild(editField);
};

const updateTask = (item, index) => {
  lists[index - 1].completed = item;
  localStorage.setItem('list', JSON.stringify(lists));
  const text = document.getElementById(`${index}-description`);
  if (item) {
    text.classList.add('overlined');
  } else {
    text.classList.remove('overlined');
  }
};

function loadPredef(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    setList(arr[i].description, arr[i].completed, counterIncreament());
  }
  localStorage.setItem('list', JSON.stringify(lists));
  const completeCheckBox = document.querySelectorAll("input[type='checkbox']");
  completeCheckBox.forEach((box) => {
    box.addEventListener('click', () => {
      updateTask(box.checked, box.value);
    });
  });
  const completeRemovers = document.querySelectorAll('a.dropdown-remover');
  completeRemovers.forEach((link) => {
    link.addEventListener('click', () => {
      deleteAll(link.id);
    });
  });
  const completeEditors = document.querySelectorAll('a.dropdown-editor');
  completeEditors.forEach((link) => {
    link.addEventListener('click', () => {
      editEvent(link.id);
    });
  });
}

loadPredef(lists);

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'enter') {
    const newIndex = counterIncreament();
    const description = document.getElementById('new-task').value;

    if (description === '' || description === ' ' || description == null) { return; }
    setList(description, false, newIndex);
    updateTask();

    document.getElementById('new-item').value = '';
    const newTask = new List(description, false, newIndex);

    lists.push(newTask);
    localStorage.setItem('list', JSON.stringify(lists));
    location.reload();
  }
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const newIndex = counterIncreament();
  const description = document.getElementById('new-task').value;

  if (description === '' || description === ' ' || description == null) { return; }
  setList(description, false, newIndex);

  document.getElementById('new-task').value = '';
  const newTask = new List(description, false, newIndex);

  lists.push(newTask);
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
});

removeAll.addEventListener('click', (e) => {
  e.preventDefault();
  lists = lists.filter((task) => task.completed === false);
  localStorage.setItem('list', JSON.stringify(lists));
  location.reload();
});
