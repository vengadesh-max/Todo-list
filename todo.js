document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
});

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(todo);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById('new-todo');
    const todo = todoInput.value.trim();
    if (todo) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        loadTodos();
    }
}

function deleteTodo(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(t => t !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
}