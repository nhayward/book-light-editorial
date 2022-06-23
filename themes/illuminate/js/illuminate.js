$(document).ready(function() {

    let hashParams = window.location.search.substring(1).split('&');
    $.each(hashParams, function(index, param) {
        if (param.split('=')[0] === 'form-select') {
            $('#service-field').val(param.split('=')[1]);
            return false;
        }
    });

	$('#contact-form').submit(function(e) {
        if ($('.phone').val() !== "" ||
            $('[name="entry.1507132880"]').val().toLowerCase() === "henryfling" ||
            $('[name="entry.1663698665"]').val().toLowerCase().indexOf("https://fling.nanolabs.es/fling") >= 0) {
            e.preventDefault();
            window.location.href = "/contact/thankyou";
        }
	});

	$('a[target="_blank"]').each(function() {
		$(this).attr('rel', 'noopener noreferrer');
	});
	
});
