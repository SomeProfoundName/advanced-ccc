const todoList = ['Make Tea', 'Watch YouTube']

renderToDoList()

function renderToDoList(){
    let todoListHTML = ''

    todoList.forEach((todoObject, index) => {
        const name = todoObject;
        const html = `
        <div class="todo-input">
            <p>${name}</p>
            <button type="button" class="btn btn-outline-danger js-delete-button">Delete</button>
        </div>
        `;
        todoListHTML += html
    });
    document.querySelector('.todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderToDoList();
        });
    });
    
}

function addTodo() {
    const todoInputElement = document.querySelector('.js-todo-input');
    const todo = todoInputElement.value;

    todoList.push(todo);
    console.log(todoList);

    todoInputElement.value = '';

    renderToDoList();
}