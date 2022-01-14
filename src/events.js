import { addNew } from "./add_remove";

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

