/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay:450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.redes', {delay: 300, origin: 'left'})
sr.reveal('.ri-arrow-down-double-line', {delay: 450, origin: 'right'})
sr.reveal('.project', {delay: 100, origin: 'left'})
sr.reveal('.skills', {delay: 100, origin: 'rigth'})
sr.reveal('.project-list', {delay: 50, origin:'top'})
/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}