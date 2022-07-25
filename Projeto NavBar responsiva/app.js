document.getElementById('logoMenu').addEventListener('click', function openResponsiveMenu (){
    let menuLogoClose = document.querySelector('.close-logo-menu');
    let menuLogoOpen = document.querySelector('.logoMenu');
    let navResponsive = document.querySelector('.navResponsive');
    
    navResponsive.classList.toggle('responsive');
    menuLogoClose.classList.toggle('responsive');
    menuLogoOpen.classList.toggle('remoResponsive');
    
})

document.getElementById('logoMenuClose').addEventListener('click', function openResponsiveMenu (){
    let navResponsive = document.querySelector('.navResponsive');
    let menuLogoClose = document.querySelector('.close-logo-menu');
    let menuLogoOpen = document.querySelector('.logoMenu');
    navResponsive.classList.remove('responsive');
    menuLogoClose.classList.remove('responsive');
    menuLogoOpen.classList.remove('remoResponsive');
})