const todoList = []

renderToDoList()

function renderToDoList(){
    let todoListHTML = ''

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
        <div class="item">
            <p class="name">${name}</p>
            <p class="date">${dueDate}</p>
            <button type="button" class="btn btn-outline-danger js-delete-button">Delete</button>
        </div>
        `;
        todoListHTML += html
    });
    document.querySelector('.todo-input').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderToDoList();
        });
    });
    
}

function addTodo() {
    const todoInputElement = document.querySelector('.js-todo-input');
    const todoInputDateElement = document.querySelector('.js-date-input')
    const name = todoInputElement.value;
    const dueDate = todoInputDateElement.value

    if (todoInputElement.value = '') {
        return;
    } else {
        todoList.push({name, dueDate});
        console.log(todoList);

    todoInputElement.value = '';

    renderToDoList();
    }
};