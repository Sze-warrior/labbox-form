$(document).ready(function(){

	var addImgDefault = $('.order-add-img-container');
	var YesBtn = $('#yes');
	var NoBtn = $('#no');

	$('.progress-bar-fill').css('width', '33%');
	$('.progress-bar-fill').children('span').hide().text('33%').fadeIn('400');

	$('.progress-bar-fill-66').css('width', '66%');
	$('.progress-bar-fill-66').children('span').hide().text('66%').fadeIn('400');	

	$('.btn-details-lg').on('click', function(e){
		$(this).closest('.table-cell').children('.order-add-img-container').hide();
		$(this).closest('.table-cell').children('.added-img').show();
		$(addImgDefault).children('.imported-img').show();

		$('.quote-green').hide();

		$('.order-details-img-confirmed').show();
	});

	$(YesBtn).on('click', function(e){
		$('textarea[name=special-details]').show();
		$(this).closest('.table-cell').children('.order-add-img-container').hide();
		$(this).closest('.table-cell').prepend('<div class="order-add-img-container"><div class="order-details-content"><p class="cost-contact-info">Cost and delivery times may vary depending on your request. We will be in contact to confirm.</p></div></div>');
	});

	$(NoBtn).on('click', function(e){
		$('textarea[name=special-details]').hide();
		$(this).closest('.table-cell').children('.order-add-img-container').show();
		$('.cost-contact-info').hide();
	});

});