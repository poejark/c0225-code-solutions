/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON: string = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const $todo = localStorage.getItem('todos-storage');
  if (!$todo) {
    return [];
  } else {
    return JSON.parse($todo);
  }
}
