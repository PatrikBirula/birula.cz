//JQuery
(function ($) {
	$(document).ready(function () {

		console.log('Im ready!')

		///////Nastavení hlavní obrazovky
		//Objevení bannerů

		///Vypsání textu
		/////////////////////////////////////////////////////////////////////////
		$('.withoutJS').hide();
		//Vypsání H1 a H2
		$('.cvh2ityped').css("opacity", "0");
		$('.cvh3ityped').css("opacity", "0");
		$('.cvh4ityped').css("opacity", "0");

		ityped.init(document.querySelector('.cvh1ityped'), {
			showCursor: false,
			strings: ['Ahoj!'],
			loop: false,
			typeSpeed: 100,
			backSpeed: 40,
			disableBackTyping: false,
			onFinished: function () {
				$(".cvh1ityped").addClass('no-after');
			}
		});

		setTimeout(function () {
			$('.cvh2ityped').css("opacity", "1");
			ityped.init(document.querySelector('.cvh2ityped'), {
				showCursor: false,
				strings: ['Jmenuji se Patrik Birula'],
				loop: false,
				typeSpeed: 80,
				backSpeed: 40,
				disableBackTyping: false,
				onFinished: function () {
					$(".cvh2ityped").addClass('no-after');
				}
			});
		}, 1300);
		setTimeout(function () {
			$('.cvh3ityped').css("opacity", "1");
			ityped.init(document.querySelector('.cvh3ityped'), {
				showCursor: false,
				strings: ['A chci být'],
				loop: false,
				typeSpeed: 80,
				backSpeed: 40,
				disableBackTyping: false,
				onFinished: function () {
					$(".cvh3ityped").addClass('no-after');
				}
			});
		}, 3900);
		setTimeout(function () {
			$('.cvh4ityped').css("opacity", "1");
			ityped.init(document.querySelector('.cvh4ityped'), {
				showCursor: false,
				strings: [' programátorem.', ' skvělým programátorem.', ' velkým programátorem!'],
				loop: false,
				typeSpeed: 100,
				backSpeed: 20,
				onFinished: function () {
					$(".cvh3ityped").addClass('no-after');
				}
			});
		}, 4800);

		//Zobrazení panelů
		$('.whyprogrammer').hide();
		$('.myknowledge').hide();
		setTimeout(function () {
			$('.whyprogrammer').fadeIn(1000);
		}, 13700);
		setTimeout(function () {
			$('.myknowledge').fadeIn(1000);
		}, 13700);


		//Zobrazení myšlenek
		$('#checkbox1').change(function () {
			if (!this.checked)
				$('#idea1').fadeOut(),
					$('#button-area1').removeClass('boxshadow-green'),
					$('#button-area1').addClass('boxshadow-red');
			else
				$('#idea1').fadeIn(),
					$('#button-area1').removeClass('boxshadow-red'),
					$('#button-area1').addClass('boxshadow-green');
		});
		$('#checkbox2').change(function () {
			if (!this.checked)
				$('#idea2').fadeOut(),
					$('#button-area2').removeClass('boxshadow-green'),
					$('#button-area2').addClass('boxshadow-red');
			else
				$('#idea2').fadeIn(),
					$('#button-area2').removeClass('boxshadow-red'),
					$('#button-area2').addClass('boxshadow-green');
		});
		$('#checkbox3').change(function () {
			if (!this.checked)
				$('#idea3').fadeOut(),
					$('#button-area3').removeClass('boxshadow-green'),
					$('#button-area3').addClass('boxshadow-red');
			else
				$('#idea3').fadeIn(),
					$('#button-area3').removeClass('boxshadow-red'),
					$('#button-area3').addClass('boxshadow-green');
		});
		$('#checkbox4').change(function () {
			if (!this.checked)
				$('#idea4').fadeOut(),
					$('#button-area4').removeClass('boxshadow-green'),
					$('#button-area4').addClass('boxshadow-red');
			else
				$('#idea4').fadeIn(),
					$('#button-area4').removeClass('boxshadow-red'),
					$('#button-area4').addClass('boxshadow-green');
		});
		$('#checkbox5').change(function () {
			if (!this.checked)
				$('#idea5').fadeOut(),
					$('#button-area5').removeClass('boxshadow-green'),
					$('#button-area5').addClass('boxshadow-red');
			else
				$('#idea5').fadeIn(),
					$('#button-area5').removeClass('boxshadow-red'),
					$('#button-area5').addClass('boxshadow-green');
		});
		$('#checkbox6').change(function () {
			if (!this.checked)
				$('#idea6').fadeOut(),
					$('#button-area6').removeClass('boxshadow-green'),
					$('#button-area6').addClass('boxshadow-red');
			else
				$('#idea6').fadeIn(),
					$('#button-area6').removeClass('boxshadow-red'),
					$('#button-area6').addClass('boxshadow-green');
		});
		$('#checkbox7').change(function () {
			if (!this.checked)
				$('#idea7').fadeOut(),
					$('#button-area7').removeClass('boxshadow-green'),
					$('#button-area7').addClass('boxshadow-red');
			else
				$('#idea7').fadeIn(),
					$('#button-area7').removeClass('boxshadow-red'),
					$('#button-area7').addClass('boxshadow-green');
		});
		$('#checkbox8').change(function () {
			if (!this.checked)
				$('#idea8').fadeOut(),
					$('#button-area8').removeClass('boxshadow-green'),
					$('#button-area8').addClass('boxshadow-red');
			else
				$('#idea8').fadeIn(),
					$('#button-area8').removeClass('boxshadow-red'),
					$('#button-area8').addClass('boxshadow-green');
		});
		$('#checkbox9').change(function () {
			if (!this.checked)
				$('#idea9').fadeOut(),
					$('#button-area9').removeClass('boxshadow-green'),
					$('#button-area9').addClass('boxshadow-red');
			else
				$('#idea9').fadeIn(),
					$('#button-area9').removeClass('boxshadow-red'),
					$('#button-area9').addClass('boxshadow-green');
		});
		$('#checkbox10').change(function () {
			if (!this.checked)
				$('#idea10').fadeOut(),
					$('#button-area10').removeClass('boxshadow-green'),
					$('#button-area10').addClass('boxshadow-red');
			else
				$('#idea10').fadeIn(),
					$('#button-area10').removeClass('boxshadow-red'),
					$('#button-area10').addClass('boxshadow-green');
		});
		$('#checkbox11').change(function () {
			if (!this.checked)
				$('#idea11').fadeOut(),
					$('#button-area11').removeClass('boxshadow-green'),
					$('#button-area11').addClass('boxshadow-red');
			else
				$('#idea11').fadeIn(),
					$('#button-area11').removeClass('boxshadow-red'),
					$('#button-area11').addClass('boxshadow-green');
		});

		//Zobrazení výsledku + formular textu
		var sirka = document.documentElement.clientWidth;
		$('#feedbacktext').css("opacity", "0");
		$('#feedbacktextsecret').css("opacity", "0");
		$('.resultbtn').click(function () {
			if (sirka > 1025) {
				setTimeout(function () {
					$("#feedbacktext").show();
					$("#feedbacktext").animate({ opacity: 1 }, { queue: false, duration: 1000 });
				}, 4000);
			};
			if (sirka < 1025) {
				setTimeout(function () {
					$("#feedbacktextsecret").show();
					$("#feedbacktextsecret").animate({ opacity: 1 }, { queue: false, duration: 1000 });
				}, 4000);
			};
			$('.resultspan').empty();
			$(".resultspan").addClass('cvh5ityped');
			if ($('.myknowledge input[type=checkbox]').filter(':checked').length >= 9)
				ityped.init(document.querySelector('.resultspan'), {
					showCursor: false,
					strings: ['Ten kluk něco umí! Bereme ho!'],
					loop: false,
					typeSpeed: 80,
					backSpeed: 40,
					disableBackTyping: false,
				});
			else if
				($('.myknowledge input[type=checkbox]').filter(':checked').length >= 6)
				ityped.init(document.querySelector('.resultspan'), {
					showCursor: false,
					strings: ['Víc než půlka, ale k nám to stačí. Bereme!'],
					loop: false,
					typeSpeed: 80,
					backSpeed: 40,
					disableBackTyping: false,
				});
			else if
				($('.myknowledge input[type=checkbox]').filter(':checked').length >= 1)
				ityped.init(document.querySelector('.resultspan'), {
					showCursor: false,
					strings: ['No něco u nás využije, tak ho zkusíme!'],
					loop: false,
					typeSpeed: 80,
					backSpeed: 40,
					disableBackTyping: false,
				});
			else
				ityped.init(document.querySelector('.resultspan'), {
					showCursor: false,
					strings: ['Nic pořádného se nenaučil, rychle odsud pryč'],
					loop: false,
					typeSpeed: 80,
					backSpeed: 40,
					disableBackTyping: false,
				});
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

		//Formulář
		$('#formularbtn').click(function (event) {
			$('.formular').show();

			event.preventDefault();
		});
		$('#formularbtnsecret').click(function (event) {
			$('.formular').show();

			event.preventDefault();
		});

		$(".cross").click(function () {
			$(".formular").hide();
		});

	});
})(jQuery);
