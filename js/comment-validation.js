jQuery(function($) {

	$("#commentform").validate({
		rules: {
			author: "required",
			email: {
				required: true,
				email: true
			},
			url: "url",
			comment: "required"
		}
	});


/********Comment Form validation****/	
$('.comment-form-comment > label').append('<span class="required">*</span>');
});