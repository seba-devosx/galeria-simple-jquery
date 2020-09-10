$(document).ready(function(){
    var numero = 1; //variable para saber la posicion en la que se encuentra la imagen

    $("#flecha-i").click(function(){
        //si presiono la flecha de la izquierda descuento de 1 en 1 la posicion de la imagen
        //solo en el caso que la posicion sea mayor que 1 (primera imagen)
        if(numero > 1){
            numero--;
        }

        cambiarBanner(numero); //invoco a la funcion que cambia la imagen en el banner
    });

    $("#flecha-d").click(function(){
        //si presiono la flecha de la izquierda descuento de 1 en 1 la posicion de la imagen
        //solo en el caso que la posicion sea menor que 3 (ultima imagen)
        if(numero < 3){
            numero++;
        }

        cambiarBanner(numero); //invoco a la funcion que cambia la imagen en el banner
    });

    //eventos click en cada miniatura de imagen
    $("#auto1").click(function(){
        numero = 1;
        cambiarBanner(numero); //invoco a la funcion que cambia la imagen en el banner
    });
    $("#auto2").click(function(){
        numero = 2;
        cambiarBanner(numero); //invoco a la funcion que cambia la imagen en el banner
    });
    $("#auto3").click(function(){
        numero = 3;
        cambiarBanner(numero); //invoco a la funcion que cambia la imagen en el banner
    });

    //funcion para cambiar la imagen en el banner (div grande)
    function cambiarBanner(n){
        switch(n){
            case 1:
                $("#banner").css("background-image","url(img/mazda.jpg)");
            break;
            case 2:
                $("#banner").css("background-image","url(img/toyota.jpg)");
            break;
            case 3:
                $("#banner").css("background-image","url(img/chevrolet.jpg)");
            break;
        }
        mostrarFlechas(n); //invoco a funcion para mostrar / ocultar flechas
    }

    //funcion para mostrar y ocultar flechas
    function mostrarFlechas(n){

        //si el numero de la imagen es 1, Desaparezco la flecha de la izquierda
        if(n==1){
            $("#flecha-i").hide();
            $("#flecha-d").fadeIn(2000);
        }

        //si el numero de la imagen es 3, Desaparezco la flecha de la derecha
        else if(n==3){
            $("#flecha-d").hide();
            $("#flecha-i").fadeIn(2000);
        }

        //aparezco las flechas en el caso que el numero de la imagen sea distinto de 1 y 3
        else{
            $("#flecha-d").fadeIn();
            $("#flecha-i").fadeIn();
        }
    }

});