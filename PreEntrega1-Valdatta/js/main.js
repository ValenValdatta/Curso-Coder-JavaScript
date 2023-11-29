// let nombre = prompt("Ingrese su nombre")
// let contrasenia = prompt("Introduzca su contraseña por favor")

// if (contrasenia === "Valentin123") { 
//     console.log(`Bienvenido ${nombre}`)
// } else {
//     console.log("La contraseña ingresada es incorrecta");
// }



function modoDePago (precioCombo) {
    let comprar = true;

while (comprar) {
    
    let metodoPago = prompt("Como deseas abonar: \n1. Efectivo 10%dto\n2. Mercado Pago\n3. Tarjeta 10% recarga ");
    
    
    switch (parseInt(metodoPago)) {
        case 1:
            precioCombo *= 0.9;
            console.log(`El monto a pagar es de ${precioCombo}`)
            break;
        case 2:
            console.log(`El monto a pagar es de ${precioCombo}`)
            break;
        case 3:
            precioCombo *= 1.1;
            console.log(`El monto a pagar es de ${precioCombo}`)
            break;
        default:
            console.log("Opcion invalida, seleccione un metodo de pago")
            continue;
    }
    let continuar = prompt("¿Desea seguir comprando? (Sí/No)").toLowerCase();
    if (continuar !== "sí") {
        comprar = false;
        console.log("Gracias por comprar con nosotros");
    }

}

}


let combo = true;

while (combo){

let precioCombo = 0;

let elegirCombo = prompt("Elegi el combo que quisieras llevar: \n1. Combo basico $10.000.- \n2. Combo premium $15.000.- \n3. Supermegacombo3000 $20.000.-")

    switch (parseInt(elegirCombo)) {
        case 1:
            precioCombo = 10000;
            modoDePago (precioCombo)
            break;
        
        case 2:
            precioCombo = 15000;
            modoDePago (precioCombo)
            break;
        
        case 3: 
            precioCombo = 20000;
            modoDePago (precioCombo)
            break;
        default:
            console.log("Opcion incorrecta, elegi una opcion valida");
            break;
    }

}








