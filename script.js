const hamburger = document.querySelector('#hamburger')
const navbarMenu = document.querySelector('.body')




//hamburger toggle
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active')
})
