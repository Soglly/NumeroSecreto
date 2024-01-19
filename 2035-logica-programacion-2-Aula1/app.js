let numeroMaximo=10
let numeroSecreto=0;
let listaNumeroSorteados=[];

let intentos=1;
console.log(numeroSecreto);
console.log(listaNumeroSorteados);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);

    if (numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero!! en ${intentos} ${(intentos==1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroSecreto>numeroUsuario){
        asignarTextoElemento('p','El numero es mayor!');
    }else{
        asignarTextoElemento('p','El numero es menor!');
    }
    intentos++;
    limpiarCaja();
} 

function generarNumeroSecreto() {

    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumeroSorteados.length==numeroMaximo){
        asignarTextoElemento("p","YA SE SORTEO TODOS LOS NUMEROS POSIBLES")
    }else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero entre 1 - ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // acondicionar el juego 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute("disabled",true);
}
 condicionesIniciales();

