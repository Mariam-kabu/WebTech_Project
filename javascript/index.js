let toggleButton = document.getElementById('burger');
let navbarLinks = document.getElementById('nav');

toggleButton.addEventListener('click', function(){
  navbarLinks.classList.toggle('opened');
})