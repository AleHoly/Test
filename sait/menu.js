document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Додаткова перевірка для уникнення конфліктів
        if (this.getAttribute('href').startsWith('#')) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


function toggleMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeMenu() {
    document.getElementById('side-menu').style.width = '0';
}

