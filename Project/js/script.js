function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeaderImg = document.querySelector('header .logo img');

    if (window.scrollY > 50) {
        selectBody.classList.add('scrolled');
        selectHeaderImg.src = './image/logo.png';
    } else {
        selectBody.classList.remove('scrolled');
        selectHeaderImg.src = './image/logo-yellow.png';
    }
}


window.addEventListener("scroll", toggleScrolled);
