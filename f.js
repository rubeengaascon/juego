
// Leemos las entradas de las opciones de piedra, papel y tijera desde el documento HTML
const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");

// Leemos la entrada del resultado desde el documento HTML
const resultadoJuego = document.getElementById("resultado");

// Inicializamos las variables para llevar cuenta de las victorias, derrotas y empates
let victoriasUsuario = 0;
let empatesUsuario = 0;
let derrotasUsuario = 0;

// Creamos una variable para guardar el intervalo
let intervalo;

// Definimos la variable movUsuario fuera de la función iniciarJuego
let movUsuario;
let movPC;

// Agregamos un evento de clic para cada opción del usuario (piedra, papel, tijera)
piedraOpcion.addEventListener("click", () => {
    iniciarJuego('piedra');
});

papelOpcion.addEventListener("click", () => {
    iniciarJuego('papel');
});

tijeraOpcion.addEventListener("click", () => {
    iniciarJuego('tijera');
});

// Función que se llama cuando el usuario hace una elección
function iniciarJuego(opcion){
    // Detenemos el intervalo anterior, si es que existe
    clearInterval(intervalo);

    // Guardamos el movimiento del usuario en la variable movUsuario
    movUsuario = opcion;

    // Generamos un movimiento aleatorio para la computadora
    const movPC = movimientoPc();

    // Comparamos los movimientos y obtenemos el resultado del juego (ganar, perder o empatar)
    const comp = comparacion(movPC, movUsuario);

    // Mostramos el resultado del juego en el documento HTML
    if (comp ==1) {
        victoriasUsuario++;
        resultadoJuego.innerHTML = " usuario elige "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='ganador'>El ganador eres tu</span>" + "<br> Victorias: " + victoriasUsuario;
    }
    if (comp ==2) {
        derrotasUsuario++;
        resultadoJuego.innerHTML = " usuario elige "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='perdedor'>El perdedor eres tu</span>" + "<br> Derrotas: " + derrotasUsuario;
    }
    if (comp ==3) {
        empatesUsuario++;
        resultadoJuego.innerHTML = " usuario elige "+movUsuario + "<br> Pc elige "+ movPC+ "<br> <span class='empate'>La partida es un empate</span>" + "<br> Empates: " + empatesUsuario;
    }

    // Creamos un intervalo que actualice el resultado cada 5 segundos
    intervalo = setInterval(() => {
        actualizarResultado(movUsuario);
    }, 3000);
}
// Función para actualizar el resultado del juego
function actualizarResultado() {
    // Comprobamos si el usuario ha hecho clic en alguna opción antes de actualizar los resultados
    if (movUsuario) {
        const movPC = movimientoPc();
        const comp = comparacion(movPC, movUsuario);
        if (comp == 1) {
            
            resultadoJuego.innerHTML = " usuario elige " + movUsuario + "<br> Pc elige " + movPC + "<br> <span class='ganador'>El ganador eres tu</span>" + "<br> Victorias: " + victoriasUsuario;
        }
        if (comp == 2) {
            
            resultadoJuego.innerHTML = " usuario elige " + movUsuario + "<br> Pc elige " + movPC + "<br> <span class='perdedor'>El perdedor eres tu</span>" + "<br> Derrotas: " + derrotasUsuario;
        }
        if (comp == 3) {
            
            resultadoJuego.innerHTML = " usuario elige " + movUsuario + "<br> Pc elige " + movPC + "<br> <span class='empate'>La partida es un empate</span>" + "<br> Empates: " + empatesUsuario;
        }
    }
}

// Función para generar un movimiento aleatorio para la computadora
function movimientoPc() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random() * 3);
    const mov = opciones[random];
    return (mov);
}

// Función para comparar los movimientos de la computadora y el usuario y determinar el resultado del juego
function comparacion(pc, usuario) {
    switch (usuario + pc) {
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //pierde
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; //empata
    }
}









