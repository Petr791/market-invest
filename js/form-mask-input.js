jQuery(function($) {

    // плагин для позиции начала ввода номера
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };




    $("#selectedphone-input").click(function() {
        //$(this).setCursorPosition(3);
        $(this).setCursorPosition(2);
    }).mask(" (999) 999-99-99");
    $("#center_not_ok").mask(" (999) 999-99-99");




    $("#orderphone-input").click(function() {
        //$(this).setCursorPosition(3);
        $(this).setCursorPosition(2);
    }).mask(" (999) 999-99-99");
    $("#center_not_ok").mask(" (999) 999-99-99");





    //$('.phone').mask('+7(999) 999-9999');


});