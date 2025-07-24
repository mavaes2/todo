let taskList = document.getElementById('taskList')
const taskInput =document.getElementById('taskInput')
const addTaskBtn =document.getElementById('addTaskBtn')
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();   // récupère et nettoie le texte

  if (!taskText) return;                     // si vide, on sort

  const li = document.createElement('li');
li.textContent = taskText;

li.addEventListener('click', () => {
  li.classList.toggle('completed');
});

taskInput.addEventListener('keydown',(event)=>{
  if (event.key === 'Enter'){
    event.preventDefault();
    addTaskBtn.click();
  };
})


taskList.appendChild(li);

  taskInput.value = '';                      // vide l’input
});

    



