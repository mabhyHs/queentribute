$(document).ready(function() {
    $('#myModal').modal('show')
});


function jugar_ahora() {

    var cant_intentos = 4;
    var acerto = false;
    var respuesta_correcta = 'freddie mercury';
    var respuesta;

    var nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("Por favor, ingrese su  nombre para JUGAR");
    } else {
        while (cant_intentos > 0 && acerto != true) {
            cant_intentos--;
            respuesta = prompt("Ingrese la respuesta");
            if (respuesta == respuesta_correcta) {
                alert(" Felicidades " + nombre + "!GANASTE!!");
                acerto = true;
            } else if (cant_intentos == 3) {
                alert("Te quedan " + cant_intentos + " intentos");
            } else if (cant_intentos == 2) {
                alert("PISTA: No siempre me llamé así. \n  (Te quedan " + cant_intentos + " intentos)");
            } else if (cant_intentos == 1) {
                alert("PISTA: Soy amante de los Gatos \n  (Te queda " + cant_intentos + " intento)");

            } else {
               alert("Lo siento " + nombre + " ya no quedan mas intentos, PERDISTE :(.\nIgual a no desanimarse éste es el sitio perfecto para aprender más sobre Queen");
            }

        }

        document.getElementById("rdo").innerHTML = "La respuesta correcta era:<strong> Freddie Mercury </strong>"
    }

}

/* NavBar */

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
