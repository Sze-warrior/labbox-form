$(document).ready(function(){

	var addImgDefault = $('.order-add-img-container');
	var YesBtn = $('.btn-details-sm');
	var NoBtn = $('.empty');

	$('.btn-details-lg').on('click', function(e){
		$(addImgDefault).children('.order-details-content, .order-details-img').hide();
		$(addImgDefault).children('.imported-img').show();

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
	});

});