/*eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import { displayLists, setEvents } from './add_remove';
import './styles.css';

let listItems = [];

if (localStorage.getItem('lists')) {
  listItems = JSON.parse(localStorage.getItem('lists'));

  displayLists(listItems);
  setEvents();
} else {
  setStorage(listItems);
  displayLists(listItems);
  setEvents();
}
