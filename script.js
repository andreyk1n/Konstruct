// document.addEventListener("DOMContentLoaded", function() {
//     const header = document.querySelector('.header');
//     const headerOffset = header.offsetTop; 

//     function checkScroll() {
//         if (window.pageYOffset > headerOffset) {
//             header.classList.add('fixed');
//         } else {
//             header.classList.remove('fixed');
//         }
//     }

//     window.addEventListener('scroll', checkScroll);
// })

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    const headerOffset = header.offsetTop; 

    function checkScroll() {
        if (window.pageYOffset > headerOffset) {
            header.classList.add('fixed');
            header.classList.add('header_shadow'); // Додаємо клас header_shadow
        } else {
            header.classList.remove('fixed');
            header.classList.remove('header_shadow'); // Видаляємо клас header_shadow
        }
    }

    window.addEventListener('scroll', checkScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const text = textElement.innerText;

    // Очищаємо вміст елементу, оскільки текст буде набиратися посимвольно
    textElement.innerText = '';

    // Посимвольно додаємо текст з анімацією
    let index = 0;
    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Швидкість набору тексту
        }
    }

    // Запускаємо анімацію набору тексту при завантаженні сторінки
    type();
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.header__nav-links');
    const navLinksItems = document.querySelectorAll('.header__nav-links a');

    burgerMenu.addEventListener('click', function (e) {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        e.stopPropagation();
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
            navLinks.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});