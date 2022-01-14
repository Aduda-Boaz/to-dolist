function setStorage(listItems) {
  localStorage.setItem('lists', JSON.stringify(listItems));
}
export { setStorage as default };