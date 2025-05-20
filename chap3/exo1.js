
const title = document.querySelector('.title');
const img = document.querySelector('.img-dogs');


img.addEventListener('click', () => {
  img.src = "https://placebear.com/500/279"; 
  img.alt = 'picture of bear';
});


title.addEventListener('mouseenter', () => {
  title.style.color = 'pink'; 
});


title.addEventListener('mouseleave', () => {
  title.style.color = 'black';
});
