var sendEmailUrl = "http://rabimsoft.com/sendemail.php"
$(document).on('submit', '#sendEmailForm', function(event) {
    event.preventDefault();
    var loadingButton = jQuery(this).find('#sendEmailBtn');
    loadingButton.button('loading');
    $.ajax({
        url: sendEmailUrl,
        type: 'post',
        data: new FormData($(this)[0]),
        processData: false,
        contentType: false,
        success: function success(result) {
            if (result.success) {
                // $('#changePasswordForm').modal('hide');
                alert("Successfully sent the email");
            }
            if (result.error) {
                alert(result.error);
            }
            console.log(result);
        },
        error: function error(result) {
            alert("Can't send an email at the moment. Please try again later.");
            console.log(result);
        },
        complete: function complete() {
            loadingButton.button('reset');
        }
    });
});