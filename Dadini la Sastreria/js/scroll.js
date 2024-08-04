function moverContenedores(direccion){
    var contenedor = document.getElementById("content-carrusel");
    if(direccion == 'Izq'){
        contenedor.scrollLeft-=1000;
    }else{
        contenedor.scrollLeft+=1000;
    }
}