const h1 = document.createElement('h1');
h1.textContent = 'My todo list';

document.body.appendChild(h1);

const input = document.createElement('input');
input.type = 'text';
input.id = 'task-input';
input.placeholder = 'la tache a faire';

document.body.appendChild(input);

const button = document.createElement('button');
button.id = 'ajouter';
button.textContent = 'Ajouter';

document.body.appendChild(button);

const list = document.createElement('ul');
list.id = 'todo-list';

document.body.appendChild(list);

button.addEventListener('click',() => {
    const touch = input.value;
    if (touch !==''){
        const li = document.createElement('li');
        li.textContent = touch;
        list.appendChild(li);
        input.value = '';
    }
})

