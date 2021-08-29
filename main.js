const list = document.querySelector('.section__faq');
console.log(list);

list.addEventListener('click', function (event) {
  if (event.target.tagName === 'SPAN') {
    event.target.classList.toggle('show');
    event.target.nextElementSibling.classList.toggle('show');
  }
});
