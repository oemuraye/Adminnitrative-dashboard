const hamburger = document.querySelector('#hamburger')
const navbarMenu = document.querySelector('.body')





//hamburger toggle
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('activeNav')
  // hamburger.classList.toggle('fa-backspace')
  // hamburger.classList.toggle('fa-bars')
})
