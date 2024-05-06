
const tasks = [
    { id: 1, text: 'Task 1', done: false, dueDate: '2023-11-30' },
    { id: 2, text: 'Task 2', done: true, dueDate: '2023-12-15' },
    { id: 3, text: 'Task 3', done: false, dueDate: '2023-11-20' }
];

const taskList = document.getElementById('taskList');
const dueDateInput = document.getElementById('dueDate');

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        const taskTextClass = task.done ? 'done' : '';
        const taskStyle = task.done ? `background-color: rgb(188, 13, 188); text-decoration: line-through #333;` : 'transparent';

        li.innerHTML = `<span class="task-text ${taskTextClass}" style="${taskStyle}">${task.text}</span>
                        <span class="due-date" style="${taskStyle}">${task.dueDate}</span>
                        <i class="far fa-square-check" onclick="toggleDone(${task.id})"></i>
                        <i class="far fa-trash-can" onclick="deleteTask(${task.id})"></i>
                       <i class="far fa-pen-to-square" onclick="editTask(${task.id})"></i>`;

        taskList.appendChild(li);
    });
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = { id: tasks.length + 1, text: taskText, done: false, dueDate: '' };
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

function addTaskWithDate() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDate');
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText !== '' && dueDate !== '') {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
            done: false,
            dueDate: dueDate
        };

        tasks.push(newTask);
        taskInput.value = '';
        dueDateInput.value = '';
        hideDatePicker();
        renderTasks();
    }
}


function toggleDone(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.done = !task.done;
        renderTasks();
    }
}

function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null) {
            task.text = newText.trim();
            renderTasks();
        }
    }
}

function toggleDatePicker() {
    const datePicker = document.getElementById('datePicker');
    datePicker.style.display = datePicker.style.display === 'none' ? 'block' : 'none';
}

function hideDatePicker() {
    const datePicker = document.getElementById('datePicker');
    datePicker.style.display = 'none';
}

renderTasks();
