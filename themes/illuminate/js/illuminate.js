$(document).ready(function() {

    let hashParams = window.location.search.substring(1).split('&');
    $.each(hashParams, function(index, param) {
        if (param.split('=')[0] === 'form-select') {
            $('#service-field').val(param.split('=')[1]);
            return false;
        }
    });

	$('#contact-form').submit(function(e) {
        let urlRegex = new RegExp("(https:|http:|www\.)\S*");
        let banned = ["henryfling", "crytofling"];
        if ($('.phone').val() !== "" ||
            banned.includes($('[name="entry.1507132880"]').val().toLowerCase()) ||
            urlRegex.test($('[name="entry.1663698665"]').val().toLowerCase())) {
            e.preventDefault();
            window.location.href = "/contact/thankyou";
        }
	});

	$('a[target="_blank"]').each(function() {
		$(this).attr('rel', 'noopener noreferrer');
	});
	
});
