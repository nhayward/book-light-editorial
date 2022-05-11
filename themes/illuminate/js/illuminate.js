$(document).ready(function() {

    let hashParams = window.location.search.substring(1).split('&');
    $.each(hashParams, function(index, param) {
        if (param.split('=')[0] === 'form-select') {
            $('#service-field').val(param.split('=')[1]);
            return false;
        }
    });

	$('#contact-form').submit(function(e) {
		$('.phone').each(function() {
			if ($(this).val() !== "") {
				e.preventDefault();
				location.reload();
			}
		});
	});

	$('a[target="_blank"]').each(function() {
		$(this).attr('rel', 'noopener noreferrer');
	});
	
});
