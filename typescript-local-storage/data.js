'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const $todo = localStorage.getItem('todos-storage');
  if (!$todo) {
    return [];
  } else {
    return JSON.parse($todo);
  }
}
