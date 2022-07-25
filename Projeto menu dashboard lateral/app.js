const toggle = document.querySelector('.toggle'); //pega o icon do menu
const menuDashboard = document.querySelector('.menu-dashboard'); //pega o menu dashboard que esta escondido

const iconMenu = toggle.querySelector('i'); //pega todos os icons do menu
const enlaceMenu = document.querySelectorAll('.enlace'); //pega todas as divs enlaces

toggle.addEventListener('click', ()=>{ //ao clicar no icon menu
    menuDashboard.classList.toggle('open'); // add uma class a menu-dashboard 

    if (iconMenu.classList.contains("bx-menu")){
        iconMenu.classList.replace('bx-menu', 'bx-x');
    }else{
        iconMenu.classList.replace('bx-x', 'bx-menu');
    }
})

enlaceMenu.forEach(enlace =>{ //se clicar em qualquer icone do menu, abre o menu
    enlace.addEventListener('click', ()=>{
        menuDashboard.classList.add('open');
        iconMenu.classList.replace('bx-menu', 'bx-x');
    })
})