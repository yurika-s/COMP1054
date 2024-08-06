// constants for selectors
const LOGO_IMAGE = 'logo.png';
const LOGO_IMAGE_YELLOW = 'logo-yellow.png';
const IMAGE_DIRECTORY = 'image/';

function toggleScrolled() {
    if (window.scrollY > 50) {
        $('body').addClass('scrolled');
        // set default image path
        let imagePath = './' + IMAGE_DIRECTORY + LOGO_IMAGE;
        if ($('body').attr('id') === 'products') {
            // change the path when the page is products
            imagePath = '../' + IMAGE_DIRECTORY + LOGO_IMAGE;
        }
        $('header .logo img').attr('src', imagePath)
    } else {
        $('body').removeClass('scrolled');
        let imagePath = './' + IMAGE_DIRECTORY + LOGO_IMAGE_YELLOW;
        if ($('body').attr('id') === 'products') {
            imagePath = '../' + IMAGE_DIRECTORY + LOGO_IMAGE_YELLOW;
        }
        $('header .logo img').attr('src', imagePath)
    }
}

window.addEventListener("scroll", toggleScrolled);
