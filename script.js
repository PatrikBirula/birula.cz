//JQuery
(function ($) {
	$(document).ready(function () {

		console.log('Im ready!')

		///////Nastavení hlavní obrazovky
		//Objevení bannerů
		$('.mainscreenimg').css("opacity", "0");
		$('.square1').hide();
		$('.square2').hide();

		var sirka = document.documentElement.clientWidth;
		if (sirka > 1025) {
			setTimeout(function () {
				$('.square1').show();
			}, 7000);
			setTimeout(function () {
				$('.square2').show();
			}, 7000);
		};
		setTimeout(function () {
			$(".mainscreenimg").css('opacity', 0);
			$(".mainscreenimg").show();
			$(".mainscreenimg").animate({ opacity: 1 }, { queue: false, duration: 1000 });
			$(".square1").addClass("hoverSQ1");
			$(".square2").addClass("hoverSQ2");
		}, 9000);

		///Vypsání textu
		/////////////////////////////////////////////////////////////////////////
		$('.withoutJS').hide();
		//Vypsání H1
		ityped.init(document.querySelector('.h1ityped'), {
			showCursor: true,
			strings: ['Ahoj!', 'Přeji Vám skvělý den!', 'Vítejte na mých stránkách'],
			loop: false,
			typeSpeed: 80,
			backSpeed: 20
		});
		$('.firstp').css("opacity", "0");
		$('.cvbtn').css("opacity", "0");
		setTimeout(function () {
			$(".firstp").css('opacity', 0);
			$(".firstp").show();
			$(".firstp").animate({ opacity: 1 }, { queue: false, duration: 1900 });
			$(".cvbtn").css('opacity', 0);
			$(".cvbtn").show();
			$(".cvbtn").animate({ opacity: 1 }, { queue: false, duration: 1900 });
		}, 9000);
		//Zobrazení obsahu
		$('.aboutwebsites').hide();
		$('.aboutgraphics').hide();

		setTimeout(function () {
			$('.aboutwebsites').show();
			$('.aboutgraphics').show();
		}, 9000);
		////////////////////////////////////////////
		//Scrollování

		var menu = $(".mainscreen");
		var menuLinks = menu.find("a");
		menuLinks.on("click", function (event) {
			$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
			event.preventDefault();
		});

		//Back to Top
		var backToTop = $('<a>', {
			href: '#home',
			class: 'back-to-top',
			html: '<i class="fa fa-caret-up fa-5x"></i>'
		});
		if (sirka > 1025) {
			backToTop.hide();
			backToTop.appendTo("body");
			backToTop.on("click", function (event) {
				$("html,body").animate({ scrollTop: 0 });
				event.preventDefault();
			});
		};


		var win = $(window);
		win.on('scroll', function () {
			if (win.scrollTop() >= 500) backToTop.fadeIn(500);
			else backToTop.hide();
		});
		////////////////////////////////////////////
		//Kontaktní obrazovka
		$(".clickpop").click(function (event) {
			$(".contacts").show();
			$(".contacts").css("display", "flex");

			event.preventDefault();
		});
		$(".cross").click(function () {
			$(".contacts").hide();
		});

		///////Galerie nastavení
		var covers = $('.graphicgallery');
		covers.children(':not(:last)').hide();

		var sliderInterval = setInterval(function () {
			covers.children(':last')
				.fadeOut(1500, function () { $(this).prependTo(covers); })
				.prev().fadeIn(1500);
		}, 2500);

		covers.on('click', function () {
			stopInterval(sliderInterval);
		});
		/////////////////////////////////////////////////////////
		//Nastavení vtipu
		var jokebtn = $('#joke');

		jokebtn.on('click', function () {
			$('.homer').fadeIn(2000);
			setTimeout(function () {
				$('.marge').fadeIn(2000);
			}, 4000);
		});


	});
})(jQuery);
