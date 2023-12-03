function toggleButton() {
	var button = document.querySelector('.toggle-btn');
    button.classList.toggle('active');
	const header = document.querySelector("header");
    const body = document.body;
	const main = document.querySelector(".main-content");
    body.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
	var sections = document.querySelectorAll("section");
	// Переключити клас для кожної секції
	sections.forEach(function(section) {
		section.classList.toggle('dark-mode');
	});
	toggleDarkModeSideMenu();
}

function toggleDarkModeSideMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('dark-mode');
}

function toggleMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('show');
}

function closeMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('show');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}