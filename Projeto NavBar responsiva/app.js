document.getElementById('logoMenu').addEventListener('click', function openResponsiveMenu (){
    let menuLogoClose = document.querySelector('.close-logo-menu');
    let menuLogoOpen = document.querySelector('.logoMenu');

    menuLogoClose.classList.toggle('responsive');
    menuLogoOpen.classList.toggle('remoResponsive');
    
})