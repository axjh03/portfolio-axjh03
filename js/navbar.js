// Change the navbar color when scrolling
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
})