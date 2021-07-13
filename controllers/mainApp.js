$(document).ready(function () {

    //Creamos los audios
    let applause = document.getElementById("applause");
    let drums = document.getElementById("drums");

    //Al cargarse la página hacemos ya la primera llamada AJAX y mostramos el primer chiste
    ajaxCall();

    //Reproducimos aplauso (necesario desbloquear autoreproducción de audio)    
    applause.play();

    //Cada vez que hagamos click en el botón, nos debe mostrar otro chiste
    $("#ajaxBtn").click(function (e) {
        e.preventDefault();

        //Limpiamos el chiste anterior (no hace falta ya que sobrescribimos, crea un efecto de movimiento en la estructura al vaciarse el div)
        // $("#joke").html("");

        //Llamamos a la función con la llamada AJAX
        ajaxCall();

        //Reproducimos sonido batería
        drums.play();

    });

});

/* Función que hace la llamada ajax */
function ajaxCall() {

    //Llamada con getJson
    $.getJSON("http://api.icndb.com/jokes/random", function (data) {
            $("#joke").html(data.value.joke);
        }
    );

    //Llamada Ajax (otra opción, requiere más datos (incluye función callback en caso de error))
    /*$.ajax({
        type: "get", //Tipo get
        url: "http://api.icndb.com/jokes/random", //URL de la API
        dataType: "json", //Queremos que nos interprete los datos en json
        success: function (data) { //En caso de éxito, nos sacará el chiste por pantalla
            $("#joke").html(data.value.joke);
        },
        error: function (xhr, status, error) { //En caso de error, nos sacará por consola los datos necesarios para identificarlo
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
    });  */
}
