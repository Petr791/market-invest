// Событие отправки формы
let formHero = document.querySelector('#formhero');
//console.log(formHero);
formHero.addEventListener('submit', (event) => {
    //event.preventDefault();
    console.log("форма 'formhero' отправлена!");
});


/* let formAction = document.querySelector('#form-action');
formAction.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("форма 'form-action' отправлена!");
}); */


/* let formPrice = document.querySelector('#form-price');
formPrice.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("форма 'form-price' отправлена!");
}); */


/* let formAnswers = document.querySelector('#form-answers');
formAnswers.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("форма 'form-answers' отправлена!");
});
 */

//popup form
/* let freepriceForm = document.querySelector('#freeprice-form');
freepriceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("форма 'freeprice-form' отправлена!");
}); */



//



// Как только страница загрузилась 
window.onload = function() {
    // проверяем поддерживает ли браузер FormData 
    if (!window.FormData) {
        alert("Браузер не поддерживает загрузку файлов на этом сайте");
    }
}


$(document).ready(function() {
    // =validation
    var errorTxt = 'Ошибка отправки';
    $("#formhero").validate({
        submitHandler: function(form) {
            var form = document.forms.formhero,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "/send.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        /*  $("#formhero").html('<p class="thank">Данные отправлены!<p>'); */
                        alert('Ваши данные отправлены!');
                    }
                }
            };
            xhr.send(formData);
        }
    });
})

/* function sendSuccess(callback) {
    jQuery(callback).find("form fieldset").html(thank);
    startClock();
} */