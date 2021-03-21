const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');
const noTask = document.querySelector('#title');

inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask (e) {
    if (taskInput.value === "") {
        alert('Write something to do')
        taskInput="";
    }

    // crea nuovo li e assegnarli classe task
    const li = document.createElement('li');
    li.className = 'task';
    li.appendChild(document.createTextNode(taskInput.value));

    //x per cancellare li
    const link = document.createElement('a');
    link.className = 'delete-todo';
    link.innerHTML = '<h3>x</h3>';
    li.appendChild(link);

    //inserire li dentre ul
    taskList.appendChild(li);

    //clear campo input dopo click su add
    taskInput.value='';

    //elimina title "Nothing to do"
    noTask.innerHTML='';
    
    e.preventDefault()
}

//rimuovi task con x
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    };
}

