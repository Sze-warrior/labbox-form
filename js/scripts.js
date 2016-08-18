$(document).ready(function(){

	//Variables
	var addImgDefault = $('.order-add-img-container');
	var successfulUploadedMsg = $('.order-details-img-confirmed-msg');


	var YesBtn = $('#yes');
	var NoBtn = $('#no');
	var BrowseBtn = $('.btn-details-lg');
	var progressBarInner = $('.progress-bar-fill');
	var progressBarInner66 = $('.progress-bar-fill-66');
	var progressBarInner100 = $('.progress-bar-fill-100');

	//Progress bar animations
	$(progressBarInner).css('width', '33%');
	$(progressBarInner).children('span').hide().text('33%').fadeIn('400');

	$(progressBarInner66).css('width', '66%');
	$(progressBarInner66).children('span').hide().text('66%').fadeIn('400');	

	$(progressBarInner100).css('width', '100%');
	$(progressBarInner100).children('span').hide().text('100%').fadeIn('400');	


	//Broswe an image button
	$(BrowseBtn).on('click', function(e){
		$(this).closest('.table-cell').children('.order-add-img-container').hide();
		$(this).closest('.table-cell').children('.added-img').show();
		$(addImgDefault).children('.imported-img').show();//This is how the image class that shows the upload image is shown

		$('.quote-green').hide();

		$(successfulUploadedMsg).show();
	});

	//Yes button Toggle
	$(YesBtn).on('click', function(e){
		$('textarea[name=special-details]').show();
		$(this).closest('.table-cell').children('.order-add-img-container').hide();
		$(this).closest('.table-cell').prepend('<div class="order-add-img-container"><div class="order-details-content"><p class="cost-contact-info">Cost and delivery times may vary depending on your request. We will be in contact to confirm.</p></div></div>');
	});

	//No Button toggle
	$(NoBtn).on('click', function(e){
		$('textarea[name=special-details]').hide();
		$(this).closest('.table-cell').children('.order-add-img-container').show();
		$('.cost-contact-info').hide();
	});

});