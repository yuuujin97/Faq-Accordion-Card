const list = document.querySelector('.section__faq');

list.addEventListener('click', function (event) {
  if (event.target.tagName === 'SPAN') {
    event.target.classList.toggle('show');
    event.target.nextElementSibling.classList.toggle('show');
  } else if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.classList.toggle('show');
    event.target.parentNode.nextElementSibling.classList.toggle('show');
  } else if (event.target.tagName === 'IMG') {
    event.target.parentNode.parentNode.classList.toggle('show');
    event.target.parentNode.parentNode.nextElementSibling.classList.toggle('show');
  }
});
