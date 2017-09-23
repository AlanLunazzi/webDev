$(document).ready(() => {
    $.get('articulo.json', function(data) {
        $(".titulo").html(data.titulo);
        console.log("Titulo: " + data.titulo);
        $(".main-text").html(data.descripcion);
        console.log("Descripcion: " + data.descripcion);
        $(".subtitulo").html(data.subtitulo);
        console.log("Subtitulo: " + data.subtitulo);
    });

    $(".enviar-mail").on('click',(e) =>{
        e.preventDefault();
        var email = $('#emailInput').val();
        if(!email){
            $('#emailInput').val("Completar email aca");
        }
        else{
            $.post('articulo.php', {"email": email}, function(data){ // No funca porque no existe articulo.php
                alert("Enviado");
            });
        }
    });
});
