var ancho_menu, ancho_item = 0;

function activar_menu(){
    var menu = document.getElementById("Menu");
    
    if(menu.style.opacity == 0){
        menu.classList.remove("inactivo");
        menu.classList.add("activo");
        menu.style.opacity = 1;
    }else{
        menu.classList.remove("activo");
        menu.classList.add("inactivo");
        menu.style.opacity = 0;
    }
}
function change_style_buttonOVER(){
    var boton = document.getElementById("act_menu");
    boton.style.backgroundColor = "rgb(84, 82, 82)";
}

function change_style_buttonOUT(){
    var boton = document.getElementById("act_menu");
    boton.style.backgroundColor = "black";
}
// Sirve para declarar cambios a borde debajo del texto
// cuando pasa el cursor o no sobre él

//Cambio de item "Menú"
function item_cambio(num_item, estado_evento){
    var idItem = document.getElementById("m"+num_item);
    switch(num_item){
        case 1:
            if(estado_evento == true){
                idItem.style.borderBottom = "1px solid white";
            }else{
                idItem.style.border = "";
            }
        break;
        case 2:
            if(estado_evento == true){
                idItem.style.borderBottom = "1px solid white";
            }else{
                idItem.style.border = "";
            }
        break;
    }
}