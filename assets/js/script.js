const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
	if (link.pathname == window.location.pathname) {
		link.classList.add("active");
	};
})