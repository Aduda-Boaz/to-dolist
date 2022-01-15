const setChecked = (item) => {
  if (item) {
    return 'checked';
  }
  return '';
};

const setClass = (item) => {
  if (item) {
    return 'overlined';
  }
  return '';
};

export default function setList(description, completed, index) {
  const element = document.createElement('li');
  const list = document.getElementById('new-list');
  element.innerHTML = `
    <input type="checkbox" ${setChecked(completed)} id="${index}-check" value="${index}>
    <p id="${index}-description" class="${setClass(completed)}">${description}</p>
    <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton-${index}" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-${index}">
        <li><a class="dropdown-item dropdown-editor" id="edit-${index}" href="#">Edit</a></li>
        <li><a class="dropdown-item dropdown-remover" id="remove-btn-${index}" href="#">Remove</a></li>
      </ul>
  </div> `;
  element.classList.add('task-element', 'd-flex', 'align-content-center', 'justify-content-between', 'py-3');
  element.setAttribute('id', index);
  list.appendChild(element);
}