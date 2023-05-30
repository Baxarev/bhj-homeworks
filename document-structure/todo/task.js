const form = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksWrapper = document.querySelector('.tasks');
const tt = document.getElementById('tasks__list');

let localCollection = JSON.parse(localStorage.getItem('localcoll')) ?? [];

const sample = document.createElement('div');
sample.classList.add('tasks__list'); 
sample.id = 'tasks__list';
sample.innerHTML = '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>';

form.addEventListener('submit', (e) => {
  e.preventDefault;
  tasksWrapper.append(sample.cloneNode(true));
  tasksWrapper.lastChild.querySelector('.task__title').append(taskInput.value);
  tasksWrapper.lastChild.querySelector('.task__remove').addEventListener('click', (e) => {
    e.preventDefault;
    e.target.closest('.tasks__list').remove();
    localCollection.splice(localCollection.findIndex(i => i === e.target.previousSibling.textContent), 1);
    localStorage.setItem('localcoll', JSON.stringify(localCollection));
  })
  localCollection.push(taskInput.value);
  localStorage.setItem('localcoll', JSON.stringify(localCollection));
  e.target.reset();
})

window.addEventListener('load', () => {
  if (!JSON.parse(localStorage.getItem('localcoll'))) return

  JSON.parse(localStorage.getItem('localcoll')).forEach(i => {
    tasksWrapper.append(sample.cloneNode(true));
    tasksWrapper.lastChild.querySelector('.task__title').append(i);
    tasksWrapper.lastChild.querySelector('.task__remove').addEventListener('click', (e) => {
      e.preventDefault;
      e.target.closest('.tasks__list').remove();
      localCollection.splice(localCollection.findIndex(i => i === e.target.previousSibling.textContent), 1);
      localStorage.setItem('localcoll', JSON.stringify(localCollection));
    })
  })
})
