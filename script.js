"use strict";

const tasks = document.querySelector(' .tasks');
const input = document.querySelector('.type');

input.addEventListener("focusin", () => input.classList.add('focused'), true);
input.addEventListener("focusout", () => input.classList.remove('focused'), true);

input.addEventListener('change', addTask);

function addTask(event) {
    const goal = document.createElement('div')
    goal.classList.add('goal');
    tasks.append(goal);

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.classList.add('checkbox')
    goal.append(checkbox)

    const task = document.createElement('span');
    task.classList.add('task');
    goal.append(task);
    task.innerHTML = this.value;
    input.value = " ";

    const del = document.createElement('div');
    del.classList.add('del');
    del.innerHTML = 'X';
    goal.append(del)

    del.addEventListener('click', ()=> goal.remove())

    checkbox.addEventListener("click", () => task.classList.toggle('active'));
    task.addEventListener('click', editTask)
    function editTask(event) {
         event.target.innerHTML = prompt('What do you want to change ?');
         if(this.innerHTML === ''){goal.remove();}
    }
}
