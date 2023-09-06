const userEmail  = document.querySelector(`.navbar-email`)
const userMenu = document.querySelector(`.desktop-menu`)


userEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    userMenu.classList.toggle('inactive')
}