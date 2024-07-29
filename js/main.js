// custom main js file build by JeanDoe

const body = document.body;
const themeBtn = document.getElementById('theme-btn');

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
    })
}


let menu = document.querySelector('#nav-menu');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
	menu.classList.toggle('fa.times');
	navbar.classList.toggle('active');
    menu.className.setAttribute('fa-times', 'fa-bars');
}

window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}