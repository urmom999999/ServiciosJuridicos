$(document).ready(function() {
    $("#boton").click(function() {
        $("body").toggleClass("oscuro");
        $(".e").toggleClass("oscuro");
        if ($("body").hasClass("oscuro")) {
            $(this).text("Modo claro");
        } else {
            $(this).text("Modo oscuro");
        }
    });

//USUARIOS ALEATORIOS

const testimoniosTextos = ["No sé qué pasó con la casa de mi tía, pero mi abogado sí",
    "Bitcoin es complicado, pero mi abogado lo hizo simple",
    "No recuerdo mucho, pero mi abogado sí"]



function datosaleatorios(){
    $.getJSON("https://randomuser.me/api/?results=4"  , function (data) {
        $("#testaleatorios").empty();
        $.each(data.results, function (index, user) {
            const testimonioTexto = testimoniosTextos[Math.floor(Math.random() * testimoniosTextos.length)];
            const htmlEjemplo = 
            `<li><div class="uno">
            <img src="${user.picture.large}">
            <div class="nombre">${user.name.last}</div>
            </div></li>`;

        $("#testaleatorios").append(htmlEjemplo);
    });});
}
datosaleatorios();
$("#testbutton").click(
        datosaleatorios);

});









/* 
    // Usar $.getJSON para llamar a la API de Random User Generator
    $.getJSON("URL_DE_LA_API", function (data) {
      // Procesar cada usuario recibido
      $.each(data.results, function (index, elemento) {
        const htmlEjemlo = `<div class="uno">${elemento.dato}"</div>`
        
      })
    }).fail(function (error) {
      // Manejar errores de la petición y mostrar error

    })
})*/


