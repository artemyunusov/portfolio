var portfolio = $("#portfolio");

portfolio.slick({
	dots: true,
	arrows: false,
	speed: 800,
	slidesToScroll: 2,
	slidesToShow: 2,

	responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
    },
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 150,
				speed: 3000
			}
    }
							]
});

if (portfolio.hasClass("tablet_screen")) {
	console.log(tablet_screen);
}

$("#portfolio__arrow--left").on("click", function (e) {
	e.preventDefault();

	portfolio.slick('slickPrev');
})

$("#portfolio__arrow--right").on("click", function (e) {
	e.preventDefault();

	portfolio.slick('slickNext');
})