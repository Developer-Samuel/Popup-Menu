document.addEventListener('DOMContentLoaded', function() {
    var openButton = document.querySelector('.open-button');
    var openButtonImg = document.querySelector('.open-button img');
    var menu = document.querySelector('.menu');
    var closeButton = document.querySelector('.close-button');

    var isTransitioning = false;

    function openMenu() {
        if (!isTransitioning) {
            isTransitioning = true;
            menu.classList.add('open');
            menu.style.transition = 'transform 1.5s ease';
            openButton.style.display = 'none';
            setTimeout(function() {
                isTransitioning = false;
            }, 1250);
        }
    }

    function closeMenu() {
        if (!isTransitioning) {
            isTransitioning = true;
            menu.classList.remove('open');
            closeButton.style.display = 'block';
            openButton.style.display = 'block';
            setTimeout(function() {
                isTransitioning = false;
            }, 1250);
        }
    }

    openButton.addEventListener('click', openMenu);
    openButtonImg.addEventListener('click', openMenu);

    closeButton.addEventListener('click', closeMenu);
});
