var w = $(window),
	body = $('body'),
	popup = $('.popup'),
	popupContainer = ('.popup-container'),
	popupBg = $('.popup-bg'),
	popupForm = $('#popup .form'),
	popupMessage = $('#popup .message'),
	speed = 400;


$('button#sticks').click(function() {
	$(this).toggleClass('close');
});


$('input[name=tel]').mask("+7 (999) 999-99-99");

$('input[name=name]').on('keyup keypress', function(e) {
    var lettersNew = lettersRU + lettersEN + " ";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

$('input[name=email]').on('keyup keypress', function(e) {
    var lettersNew = lettersEN + "@-._";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.popupBtn').click(function() {
	abs(popup).fadeIn(speed);
});

popupBg.click(function() {
	popup.fadeOut(speed);
});

popupForm.find('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});


function toogleBlocks(button, object) {
	if (button.hasClass('select')) {
		object.fadeIn(speed);
	}
	button.click(function() {
		$('#toogle-blocks .nav button').removeClass('select');
		$(this).addClass('select');
		$('#toogle-blocks .blocks > div').fadeOut(400).delay(400);
		object.fadeIn(speed);
	});
}
toogleBlocks($('#toogle-blocks .button.block-1'), $('#block-1'));
toogleBlocks($('#toogle-blocks .button.block-2'), $('#block-2'));
toogleBlocks($('#toogle-blocks .button.block-3'), $('#block-3'));

$('.slider').slick({
	fade: true,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-triangle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-triangle-right"></i></button>'
});