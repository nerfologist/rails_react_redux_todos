export const fetchTodos = () => $.ajax({ url: 'api/todos' });

export const createTodo = todo => $.ajax({
  method: 'POST',
  url: 'api/todos',
  data: { todo: todo }
});
