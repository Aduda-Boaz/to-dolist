import { addNew, removeSelected, removeAll } from "./add_remove";
import './styles.css';

function setStorage(listItems) {
  localStorage.setItem('lists', JSON.stringify(listItems));
}

function updList() {
  const checkBoxItms = document.querySelectorAll('.checkbox');
  const descripItms = document.querySelectorAll('.list-decrip');
  const nwOb = [];
  for (let i = 0; i < checkBoxItms.length; i += 1) {
    nwOb.push({
      deccription: descripItms[i].ariaValueMax,
      completed: checkBoxItms[i].checked,
      index: i + 1,
    });
  }
  setStorage(nwOb);
}

export const addNewEvent = () => {
  const input = document.querySelector('#list-input');

  input.addEventListener('enter', (e) => {
    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#list-input')) {
      addNew();
      updList();
    }
  });
};

export const editEvent = () => {
  const inputList = document.querySelectorAll('.list-description');
  const inputArr = Array.from(inputList);

  inputArr.forEach((input) => {
    input.addEventListener('input', () => {
      updList();
    });
  });
};

export const completeEvent = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const checkboxArr = Array.from(checkboxes);

  checkboxArr.forEach((inputBox) => {
    inputBox.addEventListener('change', (e) => {
      checkCompleted(e);
      updList();
    });
  });
};

export const deleteListEvent = () => {
  const lists = document.querySelectorAll('.list-placeholder');
  const listsArr = Array.from(lists);

  listsArr.forEach((list) => {
    list.addEventListener('click', (e) => {
      removeSelected(e);
      updList();
    });
  });
};

export const deleteAllEvent = () => {
  const removeAllList = document.querySelector('#clear-list');

  removeAllList.addEventListener('click', () => {
    removeAll();
    updList();
  });
};