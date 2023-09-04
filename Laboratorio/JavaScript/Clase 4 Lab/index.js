var opciones = ['roca.png','hoja.png','tijera.png'];
//piedra,papel,tijera

let countJuego = 0;
let userJuego;
let maquinaJuego;

let inicial = document.querySelector("#inicial");


const juegoInicial = (minimo, maximo) =>{
    //return Math para hacer el aleatorio. El floor redondea para abajo
    var numero = Math.floor(Math.random()* (maximo - minimo +1) + minimo);
    return numero;

}

const juegoMaquina = () =>{
    countJuego += 1;
    //va a ir contando la cantidad de juegos 
    document.getElementById("cantidad").innerHTML = countJuego;

    maquinaJuego = juegoInicial(0,2);
    let init = document.querySelector("#init");
    //va a poner la imagen de la posicion que obtuvo
    let imagen = `<img style="width:50px" src="${opciones[maquinaJuego]}">`;
    //creo un div para agregar a la columna
    let createDiv = document.createElement("div");
    createDiv.classList.add("row", "bg-dark", "text-white", "p-2")
    //el id que pongo en el boton es para acceder a la posicion para que cuando aprete jjugar desaparezca y ponga img
    createDiv.innerHTML=`<div class="col-4">${imagen}</div>
                        <div class="col-4" id="user_${countJuego}"><button onclick="juegoUser(${countJuego})" class="btn-success btn">JUGAR</button></div>
                        <div class="col-4" id="result_${countJuego}"></div>`;

//insertar el elemento creado despues del div
    init.after(createDiv)
//el boton, se esconde cuando ya tiro para que no siga iniciando juegos
    inicial.classList.add("d-none")
}

//funcion para que juegue el usuario
const juegoUser = (id) =>{
    userJuego = juegoInicial(0,2);
    let imagen = `<img style="width:50px" src="${opciones[userJuego]}">`;
    //obtengo el div, cuando de click va a a la funcion y que inserte la imagen
    let divUser = document.querySelector("#user_"+id);
    divUser.innerHTML=imagen;

    let result =  document.querySelector("#result_"+id);
    let dataResult = validateJuego(userJuego,maquinaJuego);
    result.innerHTML =dataResult;

    //vuelve a mostrar el boton de jugar porque ya tiro el usuario
    inicial.classList.remove("d-none")
} 

const validateJuego = (user,maquina) =>{
    // 0 , 1 , 2
    // 'roca.png','papel.png','tijeras.png'
    if(user==maquina){
        return "Empate";
    }
    else if( (user == 0 && maquina==2) || (user == 1 && maquina==0) || (user == 2 && maquina==1)   ){
        return "GANASTE...";
    }
    else{
        return "PERDISTE...";
    }
}
