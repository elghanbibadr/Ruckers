const hamburgerMenu = document.querySelector('.hamburgerMenu')
const closeIcon = document.querySelector('.closeIcon')
const navList = document.querySelector('.nav__list')


hamburgerMenu.addEventListener('click', showNavList)
closeIcon.addEventListener('click', hideNavList)


console.log(hamburgerMenu)

function showNavList() {
    navList.classList.remove('hidden')
    closeIcon.classList.remove('hidden')
    hamburgerMenu.classList.add('hidden')
}

function hideNavList() {
    navList.classList.add('hidden')
    closeIcon.classList.add('hidden')
    hamburgerMenu.classList.remove('hidden')
}


