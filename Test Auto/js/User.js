jQuery(document).ready(function ($) {
    //mask
    $(".phone").mask("+38(099)999-9999");

    //slider
    var jssor_1_options = {
        $AutoPlay: true,
        $Idle: 0,
        $AutoPlaySteps: 4,
        $SlideDuration: 1600, // скорость
        $SlideEasing: $Jease$.$Linear,
        $PauseOnHover: 4,
        $SlideWidth: 100, // отвечает за ширину логотипов
        $Cols: 23 // длина
    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
    //поиск и установка на тег и его первый дочерний элемент width = 100%, что бы слайдер работал адекватно и в explorer
    var sli = $('#jssor_1');
    sli.width('100%');
    sli.find(':first-child').css({ 'width': '100%' });
});

function send_form_get_consult() {
    var msg = $("#form_get_consult").serialize();
    var url_get = "send_form_why.php";
    send_form(msg, url_get);
}

function send_form_get_delivery() {
    var msg = $("#form_get_delivery").serialize();
    var url_get = "send_form_delivery.php";
    send_form(msg, url_get);
}

function send_form_consult() {
    var msg = $("#consult").serialize();
    var url_get = "consult_form.php";
    send_form(msg, url_get);
}

function send_form(msg, url_get) {
    var msg = msg;
    var url_get = url_get;
    var glagol = "POST";
    var good = "success";
    var erro = "Возникла ошибка!";
    var feeform = ".feedback_form_bg";
    var setTim = 1000;

    $.ajax({
        type: glagol,
        url: url_get,
        data: msg,
        success: function (data) {
            alert(good);
            setTimeout(function () {
                $(feeform).fadeOut();
            }, setTim);
        },
        error: function (xhr, str) {
            alert(erro);
            setTimeout(function () { $(feeform).fadeOut(); }, setTim);
        }
    });
}
