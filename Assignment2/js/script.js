// constants for selectors
const CHARACTER_SECTION_SELECTOR = 'main>section:nth-child(3)'
const BALLOON_SELECTOR = '.balloon'
const PRODUCT_SECTION_SELECTOR = '#products'
const PRODUCT_IMAGE_SELECTORS = [
    '#products img:nth-child(1)',
    '#products img:nth-child(2)',
    '#products img:nth-child(3)',
    '#products img:nth-child(4)',
    '#products img:nth-child(5)',
    '#products img:nth-child(6)'
];

// fade base function
function fade(scrollTargetSelector, targetElements, directionClass) {
    var reveal = document.querySelector(scrollTargetSelector);
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 100;
    var invisibleClass = 'hidden';
    if (elementTop < windowHeight - elementVisible) {
        targetElements.forEach(element => {
            $(element).removeClass(invisibleClass);
            $(element).addClass(directionClass);
        });
    } else {
        targetElements.forEach(element => {
            $(element).removeClass(directionClass);
            $(element).addClass(invisibleClass);
        });
    }
}

// fade up
function fadeUp() {
    fade(CHARACTER_SECTION_SELECTOR, [BALLOON_SELECTOR], 'fade-up')
}
// fade down
function fadeDown() {
    fade(PRODUCT_SECTION_SELECTOR, [PRODUCT_IMAGE_SELECTORS[2], PRODUCT_IMAGE_SELECTORS[3]], 'fade-down')
}
// fade right
function fadeRight() {
    fade(PRODUCT_SECTION_SELECTOR, [PRODUCT_IMAGE_SELECTORS[4], PRODUCT_IMAGE_SELECTORS[5]], 'fade-right')
}
// fade left
function fadeLeft() {
    fade(PRODUCT_SECTION_SELECTOR, [PRODUCT_IMAGE_SELECTORS[0], PRODUCT_IMAGE_SELECTORS[1]], 'fade-left')
}

window.addEventListener("scroll", fadeUp);
window.addEventListener("scroll", fadeDown);
window.addEventListener("scroll", fadeRight);
window.addEventListener("scroll", fadeLeft);

// hover event of the button in contact form 
$(function () {
    $('form button').hover(
        function () {
            $('#purple').removeClass('hidden');
            $('#purple').addClass('fade-up');
        },
        function () {
            $('#purple').removeClass('fade-up');
            $('#purple').addClass('hidden');
        }
    );
});

