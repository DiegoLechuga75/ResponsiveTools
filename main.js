let cuentaSeleccionada = prompt('Inserte el número de cuenta');

let puntosDeCuenta;

if(cuentaSeleccionada === '123456'){
    puntosDeCuenta = 230;
} else if(cuentaSeleccionada === '654321'){
    puntosDeCuenta = 130;
} else if(cuentaSeleccionada === '246810'){
    puntosDeCuenta = 360;
}

let rangoTarjeta;

if(puntosDeCuenta >= 0 && puntosDeCuenta <= 150){
    rangoTarjeta = 'Standard';
} else if(puntosDeCuenta >= 151 && puntosDeCuenta <= 300){
    rangoTarjeta = 'Gold';
} else if(puntosDeCuenta >= 300){
    rangoTarjeta = 'Platinum';
}

console.log('Usted es elegible para la tarjeta: ' + rangoTarjeta);