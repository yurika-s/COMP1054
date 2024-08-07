// constants for selectors
const LOGO_IMAGE = 'logo.png';
const LOGO_IMAGE_YELLOW = 'logo-yellow.png';
const IMAGE_DIRECTORY = 'image/';
const SERVICE_SELECTORS = [
    'div.service:nth-child(1)',
    'div.service:nth-child(2)',
    'div.service:nth-child(3)'
];
const PRODUCT_SELECTORS = [
    '.card-row>div:nth-child(1)',
    '.card-row>div:nth-child(2)',
    '.card-row>div:nth-child(3)'
];
let isYellowLogo = true;

function toggleScrolled() {
    if (window.scrollY > 50) {
        if (isYellowLogo) {
            isYellowLogo = false;
            $('body').addClass('scrolled');
            // set default image path
            let imagePath = './' + IMAGE_DIRECTORY + LOGO_IMAGE;
            if ($('body').attr('id') === 'products') {
                // change the path when the page is products
                imagePath = '../' + IMAGE_DIRECTORY + LOGO_IMAGE;
            }
            $('header .logo img').attr('src', imagePath)
        }
    } else {
        if (!isYellowLogo) {
            isYellowLogo = true;
            $('body').removeClass('scrolled');
            let imagePath = './' + IMAGE_DIRECTORY + LOGO_IMAGE_YELLOW;
            if ($('body').attr('id') === 'products') {
                imagePath = '../' + IMAGE_DIRECTORY + LOGO_IMAGE_YELLOW;
            }
            $('header .logo img').attr('src', imagePath)
        }
    }
}

// fade base function
function fadeUp(scrollTargetSelector, targetElements) {
    var reveal = document.querySelector(scrollTargetSelector);
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
        targetElements.forEach(element => {
            $(element).addClass('fade-up');
        });
    } else {
        targetElements.forEach(element => {
            $(element).removeClass('fade-up');
        });
    }
}
function fadeUpServices() {
    fadeUp('section.services', SERVICE_SELECTORS)
}
function fadeUpProducts() {
    fadeUp('section.products', PRODUCT_SELECTORS)
}

window.addEventListener("scroll", toggleScrolled);
$(function () {
    if ($('body').attr('id') === 'home') {
        window.addEventListener("scroll", fadeUpServices);
        window.addEventListener("scroll", fadeUpProducts);
    }
});