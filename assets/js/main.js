/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    console.log(i)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')
    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active')
    })
    tabs[i].classList.add('qualification__active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close')

let modalAdd = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}
let modalRemove = function (modalClick) {
  modalViews[modalClick].classList.remove('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    console.log(i)
    modalAdd(i)
  })
})

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener('click', () => {
    console.log(modalViews)
    modalRemove(i)
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
})

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add('scroll-header')
  else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-up')
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const aboutEnd = document.querySelector('.about-end')
const darkTheme = 'dark-theme'
const darkThemeAboutEnd = 'dark-about'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  if (selectedTheme === 'dark') {
    document.body.classList.add(darkTheme)
  } else {
    document.body.classList.remove(darkTheme)
  }
}

if (selectedTheme === 'dark') {
  aboutEnd.classList.add(darkThemeAboutEnd)
} else {
  aboutEnd.classList.remove(darkThemeAboutEnd)
}

if (selectedIcon) {
  if (selectedIcon === 'uil-moon') {
    themeButton.classList.add(iconTheme)
  } else {
    themeButton.classList.remove(iconTheme)
  }
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  aboutEnd.classList.toggle(darkThemeAboutEnd)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
