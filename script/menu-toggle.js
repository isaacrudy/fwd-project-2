// Main Navigation Toggle
const button = document.getElementById( 'menu-toggle-button' );
const links  = document.getElementById( 'nav-links' );
const closeBtn = document.getElementById('close-menu');

button.addEventListener( 'click', function() {
    links.classList.toggle( 'toggled' );
    closeBtn.style.display = 'inline';
} );

closeBtn.addEventListener('click', function() {
    links.classList.toggle('toggled');
    closeBtn.style.display = 'none';
})