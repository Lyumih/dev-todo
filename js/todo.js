let app = new Vue({
  el: '#app',
  data: {
    todos: [
      'Todo 1',
      'Todo 2',
      ['Todo 2-1', 'Todo 2-2', ['Todo 2-2-1', 'Todo 2-2-2']],
      'Todo 3-1'
    ]
  }
});
