const id = prompt("Quel est ton nom ?");
const titleElement = document.querySelector('.title');
titleElement.innerHTML = `Hello, ${id}`;
