export const fetchTodos = () => $.ajax({ url: 'api/todos' });

export const createTodo = todo => $.ajax({
  method: 'POST',
  url: 'api/todos',
  data: { todo: todo }
});

export const destroyTodo = todo => $.ajax({
  method: 'DELETE',
  url: `api/todos/${todo.id}`
});

export const updateTodo = todo => $.ajax({
  method: 'PATCH',
  url: `api/todos/${todo.id}`,
  data: { todo: todo }
});
