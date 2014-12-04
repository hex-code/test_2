var $img = $('.portfolio.active > li'),
c = 0, // counter
click = 1,
n = $img.length;
$img.eq(c).siblings().hide();

	function slide() {
			$('.portfolio.active > li:first')
			.fadeTo(1000,0)
			.next()
			.fadeTo(1000,1)
			.end()
			.appendTo('.portfolio.active');
			}
	setInterval(slide,10000);
		$('.arrow').click(function() {
			c = this.id=='next'? ++c : --c ;
			$img.fadeTo(1000,0).eq(c%n).stop(1).fadeTo(1000,1);
		})

	$('.main-menu').mouseenter(function() {
			$('#letter_button').animate( {opacity: 1}, 1000 );
				});
		$('.main-menu').mouseleave(function() {
				$('#letter_button').animate( {opacity: 0}, 100 );
				});

		$.fn.exchangePositionWith = function(selector) {
		var other = $(selector);
		this.after(other.clone());
		other.after(this).remove();
		};
		$('#list-content a').click(function() {
			var pos = $(this).closest('a').index();
			$("#list-content a:eq("+pos+")").exchangePositionWith("#list-content a:eq(0)");
			$(".portfolio:eq("+pos+")").exchangePositionWith(".portfolio:eq(0)");
			$(".portfolio:eq("+pos+")").removeClass('active');
			$(".portfolio:eq(0)").addClass('active');
			$img = $('.portfolio.active > li');
			c=0;
			$img.eq(c).siblings().hide();
			n = $img.length;
			return false;
		})

		$('#logo_text, #letter_button').click(function() {
			
			console.log(click);
			if (click%2 != 0) {
				$('#contact_page').fadeTo(700, 1);
			} else {
				$('#contact_page').fadeTo(500, 0);
			}
			click++;
			$('#list-content, #prev, #next').fadeToggle();
			// $('#letter').attr('src', 'img/cross.png');
		})