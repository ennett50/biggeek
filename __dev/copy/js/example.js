$(document).ready(function () {
    /**
     * Success callback popup
      */
    var callbackForm =  $('#callback-wrap form');
    callbackForm.on('submit', function(e){
        e.preventDefault();
        $(this).hide();
        $('.success-callback').addClass('__visible');
    });
});