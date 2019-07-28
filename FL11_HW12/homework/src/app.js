const zero = 0;
const todoItems = [];
let counter = 0;

let mainSection = document.getElementById('main');
let addSection = document.getElementById('add');
let modifySection = document.getElementById('modify');
let empty = document.getElementById('empty-list');
let list = document.getElementById('todo-list');


function renderList(todoItems) {

    const {
        todoValue,
        id
    } = todoItems[todoItems.length - 1];
    const check = document.createElement('button');
    const remove = document.createElement('button');
    const li = document.createElement('li');
    check.setAttribute('class', 'check');
    remove.setAttribute('class', 'remove');
    remove.setAttribute('id', id);

    li.appendChild(check);
    li.appendChild(document.createTextNode(todoValue));
    li.appendChild(remove);
    li.setAttribute('id', id);
    list.appendChild(li);
}

document.getElementById('todo-list').addEventListener('click', function (e) {
    if (e.target && e.target.matches('.remove')) {
        removeTodo(e.target.id);
    }

});

function removeTodo(id) {
    list.removeChild(document.getElementById(id));
}

function openAdd() {
    addSection.style.display = '';
    mainSection.style.display = 'none';
    window.location.hash = '#/add';
}

function addNew() {
    let value = document.getElementById('action-input').value;
    document.getElementById('action-input').value = '';
    if (value === '') {
        return alert('Please write any action');
    }
    todoItems.push({
        isDone: false,
        id: ++counter,
        todoValue: value
    });
    window.location.hash = '';
    mainSection.style.display = '';
    addSection.style.display = 'none';

    if (todoItems.length !== zero) {
        empty.style.display = 'none';
    }
    renderList(todoItems);
    return todoItems
}