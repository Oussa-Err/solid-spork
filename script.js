const menuHamburger = document.querySelector(".btn")
const navList = document.querySelector(".nav-list")

menuHamburger.addEventListener('click',()=>{
navList.classList.toggle('mobile-menu')
})