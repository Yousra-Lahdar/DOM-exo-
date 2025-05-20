const title = document.querySelector('#cursor-position');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  
  title.innerHTML = `Position de la souris → X: ${x}, Y: ${y}`;
});
